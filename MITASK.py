# ------------------------------------------------
# ================== MITASK *M* ==================
# ------------------------------------------------
def getSquareNumbers(arr):
    result = []

    for num in arr:
        obj = {
            "number": num,
            "square": num * num
        }

        result.append(obj)

    return result


print(getSquareNumbers([1, 2, 3]))


# ------------------------------------------------
# ================== MITASK *L* ==================
# ------------------------------------------------
def reverse_sentence(sentence):
    sentence = sentence.lower()
    words = sentence.split()

    reversed_words = []

    for word in words:
        reversed_words.append(word[::-1])

    return " ".join(reversed_words)


print(reverse_sentence("we like coding!"))
print(reverse_sentence("Burak project"))
