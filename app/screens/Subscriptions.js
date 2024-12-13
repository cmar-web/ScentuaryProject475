import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Pressable } from "react-native";
import BottomNavBar from "./BottomNavBar"; // Import the BottomNavBar component

const Subscriptions = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubscription = (plan) => {
    setSelectedPlan(plan);
    setModalVisible(true); // Show confirmation modal
  };

  const confirmSubscription = () => {
    // Logic for confirming the subscription goes here
    setModalVisible(false);
    alert(`You have successfully subscribed to the ${selectedPlan} plan.`);
  };

  const cancelSubscription = () => {
    // Close the modal without any action
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Subscriptions Section */}

        {/* Plan Options */}
        <View style={styles.planOption}>
          <Text style={styles.planTitle}>Pro Plan</Text>
          <Text style={styles.planDescription}>
            Get full access to all features with our Pro plan.
          </Text>

          {/* Yearly Plan Option */}
          <View style={styles.optionContainer}>
            <Text style={styles.planPrice}>$10/year</Text>
            <TouchableOpacity
              style={[styles.planButton, styles.yearlyButton]}
              onPress={() => handleSubscription("Yearly")}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Choose Yearly Plan</Text>
            </TouchableOpacity>
          </View>

          {/* Monthly Plan Option */}
          <View style={styles.optionContainer}>
            <Text style={styles.planPrice}>$2.50/month</Text>
            <TouchableOpacity
              style={[styles.planButton, styles.monthlyButton]}
              onPress={() => handleSubscription("Monthly")}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Choose Monthly Plan</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Display Selected Plan */}
        {selectedPlan && (
          <Text style={styles.selectedPlan}>
            You have selected the {selectedPlan} plan.
          </Text>
        )}
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelSubscription} // Close on back press or swipe
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Your Plan</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to subscribe to the {selectedPlan} plan?
            </Text>
            
            <View style={styles.modalButtons}>
              <Pressable style={[styles.modalButton, styles.confirmButton]} onPress={confirmSubscription}>
                <Text style={styles.buttonText}>Confirm</Text>
              </Pressable>
              <Pressable style={[styles.modalButton, styles.cancelButton]} onPress={cancelSubscription}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4", // Light beige background
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
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333", // Dark gray section title
    marginBottom: 10,
  },
  planOption: {
    marginBottom: 30,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  planPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  planButton: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  yearlyButton: {
    backgroundColor: "#B497BD", // Light purple 
  },
  monthlyButton: {
    backgroundColor: "#B497BD", // Light purple 
  },
  buttonText: {
    fontSize: 16,
    color: "#fff", // White text 
    fontWeight: "bold",
  },
  selectedPlan: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745", // Green for selected plan confirmation
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999, // Ensure the modal overlay is on top
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
    zIndex: 1000, // Ensure the modal container is on top of the overlay
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButton: {
    backgroundColor: "#B497BD", // Light purple for confirmation button
  },
  cancelButton: {
    backgroundColor: "#ccc", // Light gray for cancel button
  },
});

export default Subscriptions;
