<template>
  <div class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
</template>

<script></script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Semi-transparent white background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  border: 4px solid rgba(0, 128, 0, 0.2); /* Green border color */
  border-top: 4px solid #008000; /* Green spinner color */
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
