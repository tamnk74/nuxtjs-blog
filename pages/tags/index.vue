<template>
  <div class="container">
    <div class="main-content">
      <h2 class="title">Record your voice</h2>
      <div>
        <audio-recorder
          upload-url="YOUR_API_URL"
          :attempts="20"
          :time="12"
          :headers="headers"
          :before-recording="callback"
          :pause-recording="callback"
          :after-recording="callback"
          :select-record="callback"
          :before-upload="callback"
          :successful-upload="callback"
          :failed-upload="callback"
        />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  
}
</script>


