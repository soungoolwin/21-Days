<template>
  <div class="bg-white shadow-lg flex-1 mx-4 p-8 mt-[17%] rounded-xl">
    <h2 class="formheader">Create Habit</h2>
    <form>
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
          required
        >
          <option value="6am" selected>6am</option>
          <option value="12pm">12pm</option>
          <option value="6pm">6pm</option>
        </select>
      </div>
      <button
        class="bg-[#61C9A8] hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
