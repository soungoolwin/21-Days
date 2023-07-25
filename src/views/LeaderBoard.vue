<template>
  <h1 class="text-2xl font-bold mt-[60px]">LeaderBoard</h1>
  <table>
    <tr>
      <th class="small-width">Place</th>
      <th class="wide-width">Name</th>
      <th class="small-width">Count</th>
    </tr>
    <tr>
      <td>1</td>
      <td>John Doe</td>
      <td>10</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jane Smith</td>
      <td>5</td>
    </tr>
    <!-- Add more rows as needed -->
  </table>
</template>

<script>
export default {};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 18px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.small-width {
  width: 10px; /* Adjust this value to set the width for Place and Count columns */
}

.wide-width {
  width: 90%; /* Adjust this value to set the width for the Name column */
}
</style>
