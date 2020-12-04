
def readability(input):
    if (input == "end") :
        print("--------------------------------------------------------------------")
        print("------------------------     End Of Program     --------------------")
        print("--------------------------------------------------------------------")
    elif (input != "end"):
        print("--------------------------------------------------------------------")
        print("------------------------     Next Function     ---------------------")
        print("--------------------------------------------------------------------")

#1- Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
# Example: countdown(5) should return [5,4,3,2,1,0]

print("Problem #1: Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).")
def countDown(input):
    newList = []
    for i in range(input, -1, -1):
        newList.append(i)
    return newList
print(countDown(15))
readability('input')

#2- Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# Example: print_and_return([1,2]) should print 1 and return 2

print("Problem #2: Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.")
def printReturn(someList):
    print(someList[0])
    return someList[1]
printReturn([3,12])
readability('input')

#3- First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
# Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)

print("Problem #3: First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.")
def plusLength(someList):
    result = someList[0] + len(someList)
    return result
print(plusLength([1,2,3,4,15]))
readability('input')

#4- Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
# Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
# Example: values_greater_than_second([3]) should return False

print("Problem #4: Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False")
def greaterthan2nd(someList):
    newList = []
    if len(someList)<2:
        return False
    value2 = someList[1]
    for i in range(0, len(someList), 1):
        if someList[i] > value2:
            newList.append(someList[i])
    print(len(newList))
    return newList

print(greaterthan2nd([5,2,3,2,1,4]))
readability('input')


#5- This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
# Example: length_and_value(4,7) should return [7,7,7,7]
# Example: length_and_value(6,2) should return [2,2,2,2,2,2]
# length = list size       and value = given value
# size = 4, value= 7

print("Problem #5: This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.")
def lengthValue(size, value):
    newList = []
    for i in range(0, size):
        newList.append(value)
    return newList
print(lengthValue(4, 7))
readability('end')



