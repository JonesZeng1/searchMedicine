<template>
  <div class="page-container">
    <div class="success-icon">
        <i class="fas fa-check-circle" id="tick"></i>
    </div>

    <div class="success-info">
        <h3>Thanks for your buying</h3>
        <p>Your buying information has been saved, you can view and edit all your buying now. You can also continue to buy.</p>
    </div>

    <div class="buttons">
        <div class="check-button">
            <div id="check-button">Go to check</div>
        </div>
        <div class="later-button">
            <div id="later-button">Later</div>
        </div>
    </div>
 
  </div>
</template>

<script>
export default {
    name: "checkoutCompleted",
}
</script>

<style scoped>
 .page-container {
    width: 100vw;
    height: 100vh;
    text-align: center;
 }

.success-icon {
    padding-top: 5em;
}

#tick {
    font-size: 50vw;
    color: #396cf0
}

.page-container .success-info {
    padding: 3em;
    padding-top: 2em;
}

.page-container p {
    color: #999999;
}

.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.check-button {
    border: none;
    border-radius: 15px;
    width: 75vw;
    padding: 1.2em;
    color: white;
    font-size: 1em;
    background-color: #396cf0;
    text-decoration: none;
    text-align: center;
}

.later-button {
    margin-top: 2em;
    border-radius: 15px;
    width: 75vw;
    padding: 1.2em;
    color: #396cf0;
    font-size: 1em;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-color: #396cf0;
}
</style>