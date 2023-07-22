<template>
  <div class="bg-white shadow-lg flex-1 mx-4 p-8 mt-[17%] rounded-xl">
    <h2 class="formheader">Create Habit</h2>
    <form @submit.prevent="createHabit()">
      <div class="mb-4">
        <label class="formlabel" for="habit-title">Habit Title</label>
        <input
          class="forminput"
          type="text"
          id="habit-title"
          name="habit-title"
          v-model="habitTitle"
          placeholder="Enter your habit title"
          required
        />
      </div>
      <div class="mb-4">
        <label class="formlabel" for="habit-description"
          >Habit Description</label
        >
        <input
          class="forminput"
          type="text"
          id="habit-description"
          name="habit-description"
          v-model="habitDescription"
          placeholder="Enter your habit description"
          required
        />
      </div>
      <div class="mb-4">
        <label class="formlabel" for="start-date">Start Date</label>
        <input
          class="forminput"
          type="datetime-local"
          id="start-date"
          name="start-date"
          v-model="startDate"
          required
        />
      </div>
      <div class="mb-4">
        <label class="formlabel" for="time-to-send-reminder"
          >Time to Send Reminder</label
        >
        <select
          class="forminput"
          id="time-to-send-reminder"
          name="time-to-send-reminder"
          v-model="setReminder"
          required
        >
          <option value="6am" selected>6am</option>
          <option value="12pm">12pm</option>
          <option value="6pm">6pm</option>
        </select>
      </div>
      <div v-if="error" class="text-red-500">
        {{ error }}
      </div>
      <button
        class="bg-[#61C9A8] hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    let habitTitle = ref("");
    let habitDescription = ref("");
    let startDate = ref("");
    let setReminder = ref("");
    let error = ref("");

    let createHabit = async () => {
      try {
        let response = await axios.post("/api/v1/habit/createHabit", {
          habitTitle: habitTitle.value,
          habitDescription: habitDescription.value,
          startDate: startDate.value,
          timeToSendReminder: setReminder.value,
        });

        if (response.status == 201) {
          router.push("/profile");
        } else {
          error.value = response.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      createHabit,
      habitTitle,
      habitDescription,
      startDate,
      setReminder,
      error,
    };
  },
};
</script>

<style></style>
