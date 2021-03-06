<div>
    <div class="mb-6 block text-center px-8 text-xl font-medium">
        Create new account
    </div>
    <form wire:submit.prevent="register" action="#" method="POST">
        <div>
            <label for="company" class="block text-sm font-medium leading-5 text-gray-700">
                Company
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input wire:model="company" id="company" required autofocus class="@error('company') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
            @error('company') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>
        <div class="mt-6">
            <label for="fullName" class="block text-sm font-medium leading-5 text-gray-700">
                Full Name
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input wire:model="fullName" id="fullName" required autofocus class="@error('fullName') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
            @error('fullName') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>
        <div class="mt-6">
            <label for="subDomain" class="block text-sm font-medium leading-5 text-gray-700">
                Domain
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <x-input.text wire:model="subDomain" id="subDomain" leading-add-off=".localhost" required autofocus class="@error('domain') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                {{-- <input wire:model="domain" id="domain" type="email" required autofocus leading-add-on="surge.com/" class="@error('domain') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" /> --}}
            </div>
            @error('domain') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>
        <div class="mt-6">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input wire:model="email" id="email" type="email" required autofocus class="@error('email') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
            @error('email') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>

        <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input wire:model.lazy="password" id="password" type="password" required class="@error('password') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
            @error('password') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>

        <div class="mt-6">
            <label for="passwordConfirmation" class="block text-sm font-medium leading-5 text-gray-700">
                Confirm Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input wire:model.lazy="passwordConfirmation" id="passwordConfirmation" type="password" required class="@error('passwordConfirmation') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
            @error('passwordConfirmation') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>

        <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    <div wire:loading wire:target="register" class="mr-2">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"/>
                            </circle>
                            <!-- [ldio] generated by https://loading.io/ --></svg>
                    </div>
                    Register
                </button>
            </span>
        </div>

        @error('createError') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror

        <div class="mt-6">
            <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Already Have An Account?
                </a>
            </p>
        </div>
    </form>

</div>
