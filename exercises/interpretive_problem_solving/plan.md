# 1000 Lights

input:  number of lights (integer, n)
return: array containing which lights are on.

**Rules**

1. There are n total lights.
2. There are n total passes over the switches.
3. With each pass, the number of skipped lights grows by 1.

**Mental Model**

Use a counter to keep track of the number os skipped lights and iterate from the beginning repeatedly, switching lights on and off.

**Algorithm**

1. Create a switchBrd variable set to an array containing either True or False
2. Create counter, set to 0.
3. Initiate pass over loop, incrementing counter upward.
4. Inside the loop, transform switchBrd in steps lining up with counter
5. Filter switchBrd to only include the index values of which elements were `true` at the end.\
6. Return switchBrd


# Diamonds

input:  int
output: diamond image

Mental Model:
	Create a diamond shaped set of spaces and asterisks
	that is equivalent to the int given.

9 As an Example for n:
(n - 1) / 2 Spaces | 1 Asterisk | (n - 1) / 2 Spaces
(n - 3) / 2 Spaces | 3 Asterisk | ...


Rules:
1. Growing counter in all formulas (1 -> 3 -> 5 ...)
2. Once there are n asterisks, we start reducing the
	 number of asterisks
3. Keep going until there are n layers.
4. Layers can be stored as strings in an array.

Algorithm:
1. Counter starting at 1
2. Empty result array.
3. For loop going from 0 -> (n-1)
4. While (counter <= n)
		1. Add a layer to result array
		2. Increment counter by 2
5. While (counter > 1)
		1. Decrement counter by 2
		2. Add a layer to the result Array
6. Return result array, jointed together with `'\n'`


# Caesar Cipher

input:  string and integer key
return: string

Mental Model:
Iterate through the original string, returning a new string with values shifted over according to the key.

Rules:
1. Case is kept the same
    1. Need to make uppercase as necessary.
2. Non-alphabetic characters are ignored.
    1. Use a regex to identify.
3. The letter to use can be found by taking its found index, adding the key getting the remainder of that divided by 26 (letters in the alphabet).

Algorithm:
1. Break apart string into constituent characters
2. Transform charArr:
    A. If is an alphabetic character, do:
        a. Search for the index location of the downcased character in `ALPHABET`
        b. Add `key` to that index
        c. Take all that and divide by `ALPHABET.length`
        d. Return the character in ALPHABET at that position.
    B. Else
        a. Return the character as is.
3. Join the transformation with `''` as the delimiter.
4. Return that result.


# Vigenere Cipher

input:  2 strings - Message and Key
return: 1 string - Encrypted Message

Mental Model:
Iterate through the message and transform it into a new string by applying caesar encryption to each character based on the given key.

Rules:
1. Keep case -> Done through `caesarEncrypt()`
2. Ignore punctuation -> `continue` if not alphabetic.
3. The key can be turned into an array of integers
4. An independent counter can keep track of the position within the key.
5. That counter can reset upon reaching the size of the key.
6. Every alphabetic character will be given to `caesarEncrypt`

Algorithm:
1. Convert key to array of integers.
2. Create counter, initialized to 0.
3. Split the message, and transform it:
    1. Skip over non-alphabetic characters.
    2. Get the caesarEncrypted version of the character.
    3. Increment counter.
    4. Reset counter if counter is equal to the key length.
    5. Return the encrypted character.
4. Join it all together.


# Seeing Stars

input:  int - Size
output: 8 pointed star made of asterisks

Mental Model:
Print an 8 pointed star of the size given as the argument.

Rules:
1. Each side has (n - 3) / 2 spaces at max size. Same goes for the part between stars at the extremities.
2. The middle layer always has n stars
3. The inner spaces decrease, then increase.
4. The outer spaces increase, then decrease. 

Example using 9 as size:


Algorithm:
1. Set `innerSpaces` variable, initialized to ((n - 3) / 2).
2. Set `outerSpaces` variable, initialized to 0
3. Create an empty array to hold the result.
4. Iterate down (n / 2)roundDown number of times.
5. Add '*'.repeat(n)
6. Iterate up (n / 2)roundDown number of times.
