import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import BottomNavBar from "./BottomNavBar"; // Import the BottomNavBar component

const FAQ = () => {
  // State to manage which accordion item is expanded
  const [expanded, setExpanded] = useState(null);
  const [questions, setQuestions] = useState(faqData);
  const [newQuestion, setNewQuestion] = useState("");

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleQuestionSubmit = () => {
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        { question: newQuestion.trim(), answer: "This question has not been answered yet" },
      ]);
      setNewQuestion("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>

        {/* Top App Bar */}
        <View style={styles.topAppBar}>
          <Text style={styles.headline}>FAQS</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.header}>Commonly Asked Questions:</Text>
          <ScrollView style={styles.accordion}>
            {questions.map((item, index) => (
              <View key={index} style={styles.accordionItem}>
                <TouchableOpacity onPress={() => toggleExpand(index)}>
                  <Text style={styles.title}>{item.question}</Text>
                </TouchableOpacity>
                {expanded === index && <Text style={styles.body}>{item.answer}</Text>}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Input Field and Submit Button */}
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Text style={styles.label}>Ask your question:</Text>
            <TextInput
              style={styles.input}
              value={newQuestion}
              onChangeText={setNewQuestion}
              placeholder="Type here..."
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleQuestionSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

// FAQ data
const faqData = [
  {
    question: "Why do I keep getting the same fragrance in the randomizer?",
    answer: "On the Randomizer screen, turn off the allow repeats button. Now any fragrance that is picked from the wheel will be removed.",
  },
  {
    question: "How do I add a fragrance to my favorites?",
    answer: "On the Browse page, click the star next to the fragrance you would like to add to your favorites.",
  },
  {
    question: "How do I change my password?",
    answer: "Go to the Settings page, navigate to the Account Settings and select 'Change Password'.",
  },
  {
    question: "Where do I get dupe suggestions?",
    answer: "First navigate to the fragrance you want a dupe for either on the Browse page or My Collection page. Tap on your fragrance and you should see a find a dupe button.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription from the account settings page.",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4", // Light beige background
  },
  time: {
    color: "#fff",
    fontSize: 16,
  },
  topAppBar: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headline: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark gray text
    marginBottom: 20,
    textDecorationLine: 'underline', // This adds the underline
  },
  accordion: {
    flex: 1,
  },
  accordionItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  body: {
    marginTop: 5,
    fontSize: 16,
    color: "#666",
  },
  inputContainer: {
    padding: 16,
  },
  inputField: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default FAQ;

