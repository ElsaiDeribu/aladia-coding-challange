<template>
    <footer class="bg-black text-white py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-4 gap-8">
                <div class="col-span-1">
                    <h3 class="font-bold text-lg mb-4">About RecipeBook</h3>
                    <p class="text-sm leading-relaxed">
                        Your trusted source for delicious recipes and culinary inspiration. Join our community of food lovers.
                    </p>
                </div>
                <div class="col-span-1">
                    <h3 class="font-bold text-lg mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="/about" class="hover:text-gray-400">About Us</a></li>
                        <li><a href="/submit-recipe" class="hover:text-gray-400">Submit Recipe</a></li>
                        <li><a href="/featured" class="hover:text-gray-400">Featured Recipes</a></li>
                        <li><a href="/blog" class="hover:text-gray-400">Blog</a></li>
                    </ul>
                </div>
                <div class="col-span-1">
                    <h3 class="font-bold text-lg mb-4">Support</h3>
                    <ul class="space-y-2">
                        <li><a href="/contact" class="hover:text-gray-400">Contact Us</a></li>
                        <li><a href="/faq" class="hover:text-gray-400">FAQ</a></li>
                        <li><a href="/privacy" class="hover:text-gray-400">Privacy Policy</a></li>
                        <li><a href="/terms" class="hover:text-gray-400">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="col-span-1">
                    <h3 class="font-bold text-lg mb-4">Connect With Us</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-gray-400">Facebook</a></li>
                        <li><a href="#" class="hover:text-gray-400">Instagram</a></li>
                        <li><a href="#" class="hover:text-gray-400">Twitter</a></li>
                        <li><a href="#" class="hover:text-gray-400">Pinterest</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
                <p>&copy; {{ new Date().getFullYear() }} RecipeBook. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>