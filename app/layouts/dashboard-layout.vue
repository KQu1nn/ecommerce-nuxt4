<template>
  <div>
    <Navbar />
    <main class="w-full border flex flex-row border-t-gray-200 bg-gray-100">
      <Aside />
      <div class="w-full p-15">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>