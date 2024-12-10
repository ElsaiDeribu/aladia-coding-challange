<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow container mx-auto pl-28 px-4 py-6 mt-20">
            <slot />
        </main>
        <Footer />
    </div>
</template>
