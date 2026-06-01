# ------------------------------------------------
# ================== MITASK *O* ==================
# ------------------------------------------------
def calculate_total(items):
    result = 0
    
    for item in items:
        item_type = type(item)
        
        if item_type == int:
            result = result + item
        elif item_type == float:
            result = result + item
            
    return result

my_list = [14, "15", {"son": 13}, True, 23]
output = calculate_total(my_list)
print(output)
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
