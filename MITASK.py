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
