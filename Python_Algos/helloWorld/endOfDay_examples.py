# Basic-  print all integers 1 to 150....
# for i in range(start, condition on when to stop, inc/dec)

# for i in range(1, 151, 1):
#     print(i)


# x = [1, 2, 3, 4, 5, 6, 15]
# for i in range(0, len(x), 1):
# print(i)


# Multiples of five... all mult of 3 from 20 to 100
for i in range(20, 101, 5):
    print(i)

# alternative
for i in range(20, 101, 5):
    if i % 5 == 0:
        print(i)

# whoa that suckers huge.. odd 100-200 and print sum
total = 0
for i in range(100, 201, 1):
    if i % 3 == 0:
        total += i
print(total)

# flexible counter
lowNum = 8
highNum = 32
mult = 4

for i in range(lowNum, highNum+1, 1):
    if i % mult == 0:
        print(i)

#  this is the countdown...
for i in range(2030, 2020, -2):
    print(i)


# biggie size...given list write fx

# def biggie_size(someList):
#     for i in range(0, len(somelist), 1):
#         if someList[i] < 0:
#             someList[i] = "small"
#     print(someList[i])


# biggie_size([-1, 3, 5, -5])

# Count the negatives
x = [-1, -5, 6, 7, -10, -55, 12, 8]


def negativeCounter(someList):
    negativeTotal = 0
    for i in range(0, len(someList), 1):
        if someList[i] < 0:
            negativeTotal += 1
    someList[len(someList-1)] = negativeTotal
    print(someList)


negativeCounter(x)
