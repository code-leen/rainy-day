<template>
    <UContainer class="h-[95%] flex flex-col justify-center items-center">
        <div class="circle-wrap">
            <div class="circle-outline"></div>
            <div ref="circle-progress" class="circle-progress"></div>
        </div>
        <p class="breaths">Breaths remaining: <span class="breaths-text">{{ count }}</span></p>
        <p class="instructions">{{ instructions }}</p>
        <UContainer class="flex content-center justify-center">
            <UButton :disabled="hasStarted" @click="start">{{ actionBtnText }}</UButton>
        </UContainer>
    </UContainer>
</template>

<script setup>
const count = ref(3);
const instructions = ref('Are you ready to start?');
const actionBtnText = ref('Begin')
const hasStarted = ref();
const circleProgress = useTemplateRef('circle-progress');
const DEFAULT_COUNT = 3;
const INHALE_DURATION = 4000;
const EXHALE_DURATION = 4000;

async function start() {
    if (hasStarted.value === false) return reset();
    actionBtnText.value = 'In progress';
    hasStarted.value = true;
    const totalBreaths = count.value;
    for (let i = 0; i < totalBreaths; i++) {
        instructions.value = 'Inhale';
        await growCircle(INHALE_DURATION);
        instructions.value = 'Exhale';
        await shrinkCircle(EXHALE_DURATION)
        count.value--;
    }
    instructions.value = 'Nice work!'
    hasStarted.value = false;
    actionBtnText.value = 'Reset';
}

function reset() {
    count.value = DEFAULT_COUNT;
    instructions.value = 'Are you ready to start?';
    actionBtnText.value = 'Begin';
    hasStarted.value = undefined;
}

async function growCircle(duration) {
    return await new Promise(resolve => {
        circleProgress.value.classList.add('circle-grow');
        setTimeout(() => {
            resolve();
        }, duration)
    })
}

async function shrinkCircle(duration) {
    return await new Promise(resolve => {
        circleProgress.value.classList.remove('circle-grow');
        setTimeout(() => {
            resolve();
        }, duration)
    })
}
</script>

<style>
.circle-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
}

.circle-outline {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: transparent;
    border: 15px solid #f1f1f1;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.circle-progress {
    width: 50px;
    height: 50px;
    position: absolute;
    background-color: #3f6212;
    border-radius: 50%;
    transition: 4s ease all;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.circle-grow {
    transform: scale(5.3);
}

.breaths {
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
}

.instructions {
    text-align: center;
    margin-bottom: 32px;
}
</style>