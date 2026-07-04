# ------------------------------------------------
# ================== MITASK *W* ==================
# ------------------------------------------------
def chunkArray(arr, size):
    result = []
    temp = []

    for num in arr:
        temp.append(num)

        if len(temp) == size:
            result.append(temp)
            temp = []

    if len(temp) != 0:
        result.append(temp)

    return result

# ------------------------------------------------
# ================== MITASK *V* ==================
# ------------------------------------------------

# def countChars(text):
#     result = {}

#     for letter in text:

#         if letter not in result:
#             result[letter] = 1
#         else:
#             result[letter] += 1

#     return result

# ------------------------------------------------
# ================== MITASK *T* ==================
# ------------------------------------------------
# def mergeSortedArrays(arr1, arr2):
#     result = []

#     for num in arr1:
#         result.append(num)

#     for num in arr2:
#         result.append(num)

#     result.sort()

#     return result


# print(mergeSortedArrays([0, 3, 4], [4, 6]))

# ------------------------------------------------
# ================== MITASK *S* ==================
# ------------------------------------------------
# def missingNumber(arr):
#     missing = None

#     for num in range(len(arr) + 1):
#         if num not in arr:
#             missing = num
#             break

#     return missing


# numbers = [3, 0, 1, 6, 2, 5]
# print(missingNumber(numbers))


# ------------------------------------------------
# ================== MITASK *R* ==================
# ------------------------------------------------

# def calculate(expression):
#     num1, operator, num2 = expression.split()

#     if operator == "+":
#         return int(num1) + int(num2)


# print(calculate("1 + 3"))  # 4

# ------------------------------------------------
# ================== MITASK *Q* ==================
# ------------------------------------------------
# def hasProperty(obj, objKey):
#     if objKey in obj:
#         print(f"object has -> {objKey} <- property")
#         return True

#     print(f"object does not have -> {objKey} <- property")
#     return False


# car = {"name": "BMW", "year": 2004}

# print(hasProperty(car, "origin"))
# print(hasProperty(car, "name"))


# ------------------------------------------------
# ================== MITASK *P* ==================
# ------------------------------------------------
# def convert_data(details):
#     result = []

#     for field, value in details.items():
#         result.append([field, value])

#     return result


# print(
#     convert_data({
#         "product": "Laptop",
#         "price": 1200,
#         "stock": 15,
#         "brand": "Lenovo"
#     })
# )

# ------------------------------------------------
# ================== MITASK *O* ==================
# ------------------------------------------------


# def calculate_total(items):
#     result = 0

#     for item in items:
#         item_type = type(item)

#         if item_type == int:
#             result = result + item
#         elif item_type == float:
#             result = result + item

#     return result


# my_list = [14, "15", {"son": 13}, True, 23]
# output = calculate_total(my_list)
# print(output)
# ------------------------------------------------
# ================== MITASK *N* ==================
# ------------------------------------------------

# # Task N

# def palindrom_check(word):
#     left = 0
#     right = len(word) - 1

#     while left < right:
#         if word[left].lower() != word[right].lower():
#             return False

#         left += 1
#         right -= 1

#     return True


# result1 = palindrom_check("dad")
# result2 = palindrom_check("DaaD")
# result3 = palindrom_check("python")

# print(result1)
# print(result2)
# print(result3)

# ------------------------------------------------
# ================== MITASK *M* ==================
# ------------------------------------------------


# def getSquareNumbers(arr):
#     result = []

#     for num in arr:
#         obj = {
#             "number": num,
#             "square": num * num
#         }

#         result.append(obj)

#     return result


# print(getSquareNumbers([1, 2, 3]))


# ------------------------------------------------
# ================== MITASK *L* ==================
# ------------------------------------------------
# def reverse_sentence(sentence):
#     sentence = sentence.lower()
#     words = sentence.split()

#     reversed_words = []

#     for word in words:
#         reversed_words.append(word[::-1])

#     return " ".join(reversed_words)


# print(reverse_sentence("we like coding!"))
# print(reverse_sentence("Burak project"))
