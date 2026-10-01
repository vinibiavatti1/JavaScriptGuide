/**
 * Set
 *
 * Sets are collections of values where each value can occur only once. They maintain insertion
 * order and offer built-in methods for set operations like union, intersection, and difference.
 */

//==================================================================================================
// Set
//==================================================================================================

/**
 * Declaration
 * - Initializes a new Set instance containing unique initial items.
 * - Output: Set(3) { 'A', 'B', 'C' }
 */
let st = new Set(['A', 'B', 'C'])
console.log(st)

/**
 * Duplicates Not Allowed
 * - Automatically discards duplicate elements during initialization or insertion.
 * - Output: Set(1) { 'A' }
 */
st = new Set(['A', 'A', 'A'])
console.log(st)

/**
 * Length (Size)
 * - Returns the total number of unique elements present in the Set.
 * - Output: 1
 */
st = new Set(['A', 'A', 'A'])
console.log(st.size)

/**
 * Type Of
 * - Checking if a value is strictly an instance of Set using the 'instanceof' operator.
 * - Note: The 'typeof' operator returns 'object' for Set because Set is derived from Object.
 * - Output: true
 */
st = new Set(['A', 'B', 'C'])
console.log(st instanceof Set)

//==================================================================================================
// Destructure & Spread
//==================================================================================================

/**
 * Destructuring
 * - Unpacks elements from a Set into distinct variables.
 * - Output: A B [ 'C' ]
 */
st = new Set(['A', 'B', 'C', 'C'])
let [a, b, ...rest] = st
console.log(a, b, rest)

/**
 * Spread Operator (...)
 * - Expands a Set into its individual elements to combine or pass into structures.
 * - Output: Set(3) { 'A', 'B', 'C' }
 */
st = new Set(['A', 'B'])
let clone = new Set([...st, 'C'])
console.log(clone)

//==================================================================================================
// Iteration
//==================================================================================================

/**
 * For Of
 * - Iterates directly over values stored in the Set.
 * - Note: Iterating directly over the Set is equivalent to 'st.values()'.
 * - Output: A | B | C
 */
st = new Set(['A', 'B', 'C'])
for (let value of st) {
    console.log(value)
}

/**
 * For Each (Functional)
 * - Executes a provided callback function once for each element in the Set.
 * - Output: A | B | C
 */
st = new Set(['A', 'B', 'C'])
st.forEach(value => console.log(value))

//==================================================================================================
// Content Operations
//==================================================================================================

/**
 * Has
 * - Returns a boolean indicating whether an element exists in the Set.
 * - Output: true
 */
st = new Set(['A', 'B', 'C'])
console.log(st.has('B'))

/**
 * Add
 * - Inserts a new element into the Set if it is not already present.
 * - Output: Set(3) { 'A', 'B', 'C' }
 */
st = new Set(['A', 'B'])
st.add('A')
st.add('C')
console.log(st)

/**
 * Delete
 * - Removes a specified element from the Set.
 * - Output: Set(2) { 'A', 'C' }
 */
st = new Set(['A', 'B', 'C'])
st.delete('B')
console.log(st)

/**
 * Clear
 * - Removes all elements from the Set.
 * - Output: Set(0) {}
 */
st = new Set(['A', 'B', 'C'])
st.clear()
console.log(st)

//==================================================================================================
// Set Operations
//==================================================================================================

/**
 * Is Superset Of
 * - Determines if all elements of another set are contained within the current set.
 * - Output: true
 */;
`
st1######
  #      #
 # st2##  #
#    #  #  #
 #    ##  #
  #      #
   ######
`;
let st1 = new Set([1, 2, 3])
let st2 = new Set([2, 3])
let result = st1.isSupersetOf(st2)
console.log(result)

/**
 * Is Subset Of
 * - Determines if all elements of the current set are contained within another set.
 * - Output: true
 */;
`
st2######
  #      #
 # st1##  #
#    #  #  #
 #    ##  #
  #      #
   ######
`;
st1 = new Set([2, 3])
st2 = new Set([1, 2, 3])
result = st1.isSubsetOf(st2)
console.log(result)

/**
 * Is Disjoint From
 * - Determines if the current set shares no common elements with another set.
 * - Output: true
 */;
`
st1###### ######st2
  #      #      #
 #      # #      #
#   x  #   #  x   #
 #      # #      #
  #      #      #
   ###### ######
`;
st1 = new Set([1, 2])
st2 = new Set([3, 4])
result = st1.isDisjointFrom(st2)
console.log(result)

/**
 * Union
 * - Creates a new set containing all elements present in either set.
 * - Output: Set(4) { 1, 2, 3, 4 }
 */;
`
st1###### ######st2
  #      #      #
 #      # #      #
#   x  # x #  x   #
 #      # #      #
  #      #      #
   ###### ######
`;
st1 = new Set([1, 2])
st2 = new Set([3, 4])
result = st1.union(st2)
console.log(result)

/**
 * Intersection
 * - Creates a new set containing only elements common to both sets.
 * - Output: Set(1) { 2 }
 */;
`
st1###### ######st2
  #      #      #
 #      # #      #
#      # x #      #
 #      # #      #
  #      #      #
   ###### ######
`;
st1 = new Set([1, 2])
st2 = new Set([2, 3])
result = st1.intersection(st2)
console.log(result)

/**
 * Difference
 * - Creates a new set containing elements present in the first set but not in the second.
 * - Output: Set(1) { 1 }
 */;
`
st1###### ######st2
  #      #      #
 #      # #      #
#   x  #   #      #
 #      # #      #
  #      #      #
   ###### ######
`;
st1 = new Set([1, 2])
st2 = new Set([2, 3])
result = st1.difference(st2)
console.log(result)

/**
 * Symmetric Difference
 * - Creates a new set containing elements that are present in either set, but not in both.
 * - Output: Set(2) { 1, 3 }
 */;
`
st1###### ######st2
  #      #      #
 #      # #      #
#   x  #   #  x   #
 #      # #      #
  #      #      #
   ###### ######
`;
st1 = new Set([1, 2])
st2 = new Set([2, 3])
result = st1.symmetricDifference(st2)
console.log(result)
