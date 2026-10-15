class ServiceProviderError extends Error { }

const createUserService = ({ userRepository, metricsService }) => {
    console.log('UserService Created')
    return {
        addUser: () => {
            userRepository.addUser()
            metricsService.addMetric()
        }
    }
}

const createMetricsService = ({ metricsRepository }) => {
    console.log('MetricsService Created')
    return {
        addMetric: () => metricsRepository.addMetric()
    }
}

const createUserRepository = ({ db }) => {
    console.log('UserRepository Created')
    return {
        addUser: () => db.addUser()
    }
}

const createMetricsRepository = ({ db }) => {
    console.log('MetricsRepository Created')
    return {
        addMetric: () => db.addMetric()
    }
}

const createDatabase = () => {
    console.log('DB Created')
    return {
        addUser: () => console.log('User added successfully'),
        addMetric: () => console.log('Metric registered successfully')
    }
}

createUserService.$inject = ['userRepository', 'metricsService']
createMetricsService.$inject = ['metricsRepository']
createUserRepository.$inject = ['db']
createMetricsRepository.$inject = ['db']
createDatabase.$inject = []

const createServiceProvider = () => {
    const services = new Map()

    const register = (name, providerFn) => {
        if (!Reflect.has(providerFn, '$inject')) {
            throw new ServiceProviderError('Provider hasn\'t the \'$inject\' property set: ' + name)
        }
        services.set(name, {
            name,
            providerFn,
            deps: providerFn.$inject,
            instance: null
        })
    }

    const get = name => {
        const service = processService(name)
        return service.instance
    }

    const processService = name => {
        if (!services.has(name)) {
            throw new ServiceProviderError(`Service ${name} not registered`)
        }
        const service = services.get(name)
        if (service.instance === null) {
            service.instance = createInstance(service)
        }
        return service
    }

    const createInstance = service => {
        const args = {}
        for (const depName of service.deps) {
            const dep = processService(depName)
            args[dep.name] = dep.instance
        }
        service.instance = service.providerFn.call(null, args)
        return service.instance
    }

    return {
        register,
        get
    }
}

const serviceProvider = createServiceProvider()
serviceProvider.register('userService', createUserService)
serviceProvider.register('metricsService', createMetricsService)
serviceProvider.register('userRepository', createUserRepository)
serviceProvider.register('metricsRepository', createMetricsRepository)
serviceProvider.register('db', createDatabase)
const userService = serviceProvider.get('userService')
userService.addUser()
