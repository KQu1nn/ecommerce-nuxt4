<template>
    <div class="w-full bg-white rounded-2xl py-5 px-20">
        <h1
            class="w-full text-xl font-medium text-gray-800 text-center py-10 flex gap-3 flex-row items-center justify-center">
            <Icon name="lucide:package-plus" size="30" />
            Adicionar novo produto
        </h1>
        <form @submit.prevent="send" class="flex flex-col gap-4 py-5">
            <input type="text" placeholder="Nome do produto"
                class="border border-gray-100 px-4 py-2 outline-green-600" />
            <textarea placeholder="Digite uma descrição" class="border border-gray-100 px-4 py-2 outline-green-600" />
            <input type="text" placeholder="Preço do produto"
                class="border border-gray-100 px-4 py-2 outline-green-600" />
            <div class="flex flex-col items-start gap-3 ">
                <input type="file" accept="image/*" @change="onFileChange" class="hidden " ref="fileInput" />

                <button @click="fileInput.click()"
                    class="px-4 py-2 my-5 flex flex-row gap-1 items-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer hover:scale-105 hover:font-medium transition ease-in-out duration-300">
                    <Icon name="lucide:image-down" size="17" />
                    Adicionar Foto
                </button>

                <div v-if="preview" class="mt-3">
                    <img :src="preview" alt="Prévia" class="w-40 h-40 object-cover rounded-lg shadow" />
                </div>
            </div>
            <div class="w-full flex justify-center">
                <button
                    class="w-[250px] text-center flex flex-row gap-2 font-medium text-lg items-center justify-center py-2 rounded-xl cursor-pointer text-white bg-green-700">
                    <Icon name="lucide:send" size="18" />
                    Publicar postagem
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'dashboard-layout'
})
function send() {

}

const fileInput = ref(null)
const preview = ref(null)

function onFileChange(event) {
    const file = event.target.files[0]
    if (file) {
        preview.value = URL.createObjectURL(file)
    }
}
</script>