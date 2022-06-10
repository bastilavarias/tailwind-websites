<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        document.title = 'Website #1 (Manage)';
        let isMenuOpen = ref(false);

        const changeMenuState = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        return {
            isMenuOpen,
            changeMenuState,
        };
    },
});
</script>

<template>
    <main>
        <nav class="relative container mx-auto p-6">
            <div class="flex items-center justify-between">
                <div class="pt-2">
                    <img src="../assets/logo.svg" alt="Logo" />
                </div>
                <div class="hidden md:flex space-x-6">
                    <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
                    <a href="#" class="hover:text-darkGrayishBlue">Product</a>
                    <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
                    <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
                    <a href="#" class="hover:text-darkGrayishBlue">Community</a>
                </div>
                <a
                    href=""
                    class="hidden md:flex bg-brightRed p-3 px-6 pt-2 text-white baseline rounded-full hover:bg-brightRedLight"
                    >Get Started</a
                >
                <button
                    id="menu-btn"
                    :class="`block hamburger focus:outline-none md:hidden ${
                        isMenuOpen ? 'open' : 'close'
                    }`"
                    @click="changeMenuState"
                >
                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </button>
            </div>
            <div :class="isMenuOpen ? 'block' : 'hidden'">
                <div
                    id="menu"
                    class="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                >
                    <a href="#">Pricing</a>
                    <a href="#">Product</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Community</a>
                </div>
            </div>
        </nav>

        <section id="hero">
            <div
                class="container mx-auto mt-10 flex flex-col-reverse items-center px-6 space-y-0 md:flex-row"
            >
                <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1
                        class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
                    >
                        Bring everyone together to build better products.
                    </h1>
                    <p
                        class="max-w-md text-center text-darkGrayishBlue md:max-w-sm md:text-left"
                    >
                        Manage makes it simple for software team to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <div class="flex justify-center md:justify-start">
                        <a
                            href=""
                            class="hidden md:flex bg-brightRed p-3 px-6 pt-2 text-white baseline rounded-full hover:bg-brightRedLight"
                            >Get Started</a
                        >
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img
                        src="../assets/illustration-intro.svg"
                        alt="Illustration Charts"
                    />
                </div>
            </div>
        </section>

        <section id="features">
            <div
                class="container mx-auto flex flex-col px-4 mt-10 space-y-12 md:space-y-0 md:flex-row"
            >
                <div class="flex flex-col space-y-12 md:w-1/2">
                    <h2
                        class="max-w-md text-4xl font-bold text-center md:text-left"
                    >
                        What's different about Manage?
                    </h2>
                    <p
                        class="max-w-md text-center text-darkGrayishBlue md:max-w-sm md:text-left"
                    >
                        Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made for
                        modern digital product teams.
                    </p>
                </div>
                <div class="flex flex-col space-y-8 md:w-1/2">
                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >
                        <div
                            class="rounded-l-full bg-brightRedSupLight md:bg-transparent"
                        >
                            <div class="flex items-center space-x-2">
                                <div
                                    class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                                >
                                    01
                                </div>
                                <h3
                                    class="text-base font-bold md:mb-4 md:hidden"
                                >
                                    Track company-wide progress
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden text-lg font-bold mb-4 md:block">
                                Track company-wide progress
                            </h3>
                            <p class="text-darkGrayishBlue">
                                See how your day-to-day tasks fit into the wider
                                vision. Go from tracking progress at the
                                milestone level all the way done to the smallest
                                of details. Never lose sight of the bigger
                                picture again.
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >
                        <div
                            class="rounded-l-full bg-brightRedSupLight md:bg-transparent"
                        >
                            <div class="flex items-center space-x-2">
                                <div
                                    class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                                >
                                    02
                                </div>
                                <h3
                                    class="text-base font-bold md:mb-4 md:hidden"
                                >
                                    Advanced built-in reports
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden text-lg font-bold mb-4 md:block">
                                Advanced built-in reports
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Set internal delivery estimates and track
                                progress toward company goals. Our customisable
                                dashboard helps you build out the reports you
                                need to keep key stakeholders informed.
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >
                        <div
                            class="rounded-l-full bg-brightRedSupLight md:bg-transparent"
                        >
                            <div class="flex items-center space-x-2">
                                <div
                                    class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                                >
                                    03
                                </div>
                                <h3
                                    class="text-base font-bold md:mb-4 md:hidden"
                                >
                                    Everything you need in one place
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden text-lg font-bold mb-4 md:block">
                                Everything you need in one place
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Stop jumping from one service to another to
                                communicate, store files, track tasks and share
                                documents. Manage offers an all-in-one team
                                productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials">
            <div class="container mx-auto mt-32 text-center">
                <h2 class="text-4xl font-bold">
                    What's Different About Manage?
                </h2>

                <div
                    class="flex flex-col mt-24 space-y-8 md:flex-row md:space-x-6 md:space-y-0"
                >
                    <div
                        class="flex flex-col items-center bg-veryLightGray rounded-lg p-6 space-y-6 md:w-1/3"
                    >
                        <img
                            src="../assets/avatar-anisha.png"
                            alt="Anisha"
                            class="w-16 -mt-14"
                        />
                        <h5 class="text-lg font-bold">Anisha Li</h5>
                        <p class="text-sm text-darkGrayishBlue">
                            “Manage has supercharged our team’s workflow. The
                            ability to maintain visibility on larger milestones
                            at all times keeps everyone motivated.”
                        </p>
                    </div>

                    <div
                        class="flex flex-col items-center bg-veryLightGray rounded-lg p-6 space-y-6 md:w-1/3"
                    >
                        <img
                            src="../assets/avatar-ali.png"
                            alt="Ali"
                            class="w-16 -mt-14"
                        />
                        <h5 class="text-lg font-bold">Ali Bravo</h5>
                        <p class="text-sm text-darkGrayishBlue">
                            “We have been able to cancel so many other
                            subscriptions since using Manage. There is no more
                            cross-channel confusion and everyone is much more
                            focused.”
                        </p>
                    </div>

                    <div
                        class="flex flex-col items-center bg-veryLightGray rounded-lg p-6 space-y-6 md:w-1/3"
                    >
                        <img
                            src="../assets/avatar-richard.png"
                            alt="Richard"
                            class="w-16 -mt-14"
                        />
                        <h5 class="text-lg font-bold">Richard Watts</h5>
                        <p class="text-sm text-darkGrayishBlue">
                            “Manage has supercharged our team’s workflow. The
                            ability to maintain visibility on larger milestones
                            at all times keeps everyone motivated.”
                        </p>
                    </div>
                </div>

                <div class="my-16">
                    <a
                        href=""
                        class="bg-brightRed p-3 px-6 pt-2 text-white baseline rounded-full hover:bg-brightRedLight"
                        >Get Started</a
                    >
                </div>
            </div>
        </section>

        <section id="cta" class="bg-brightRed">
            <div
                class="container mx-auto flex flex-col items-center justify-between px-6 py-24 space-y-12 md:py-12 md:flex-row md:space-y-0"
            >
                <h2
                    class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
                >
                    Simplify how your team works today<span class="text-6xl"
                        >.</span
                    >
                </h2>
                <div>
                    <a
                        href=""
                        class="bg-white p-3 px-6 pt-2 text-brightRed baseline rounded-full shadow-2xl hover:bg-gray-300"
                        >Get Started</a
                    >
                </div>
            </div>
        </section>

        <footer class="bg-veryDarkBlue">
            <div
                class="container mx-auto flex flex-col-reverse justify-between px-6 space-y-8 py-10 md:flex-row md:space-y-0"
            >
                <div
                    class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
                >
                    <div class="md:hidden text-white my-6">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    <div>
                        <img
                            src="../assets/logo-white.svg"
                            class="h-8"
                            alt="Logo"
                        />
                    </div>

                    <div class="flex justify-center space-x-4">
                        <a href="#">
                            <img
                                src="../assets/icon-facebook.svg"
                                alt=""
                                class="h-8"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="../assets/icon-youtube.svg"
                                alt=""
                                class="h-8"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="../assets/icon-twitter.svg"
                                alt=""
                                class="h-8"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="../assets/icon-pinterest.svg"
                                alt=""
                                class="h-8"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="../assets/icon-instagram.svg"
                                alt=""
                                class="h-8"
                            />
                        </a>
                    </div>
                </div>

                <div class="flex justify-around space-x-32">
                    <div class="flex flex-col space-y-3 text-white">
                        <a href="#" class="hover:text-brightRed">Home</a>
                        <a href="#" class="hover:text-brightRed">Pricing</a>
                        <a href="#" class="hover:text-brightRed">Products</a>
                        <a href="#" class="hover:text-brightRed">About</a>
                    </div>
                    <div class="flex flex-col space-y-3 text-white">
                        <a href="#" class="hover:text-brightRed">Careers</a>
                        <a href="#" class="hover:text-brightRed">Community</a>
                        <a href="#" class="hover:text-brightRed"
                            >Privacy Policy</a
                        >
                    </div>
                </div>

                <div class="flex flex-col justify-between">
                    <form>
                        <div class="flex justify-between space-x-3">
                            <input
                                type="text"
                                class="flex-1 px-4 py-2 rounded-full focus:outline-none"
                                placeholder="Updated in your inbox"
                            />
                            <button
                                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus-outline-none"
                            >
                                Go
                            </button>
                        </div>
                    </form>
                    <div class="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>

<style scoped>
body {
    background-image: url('../assets/bg-tablet-pattern.svg');
    background-repeat: no-repeat;
    background-size: 800px;
    background-position: 90% -25%;
}

#cta {
    background-image: url('../assets/bg-simplify-section-desktop.svg');
    background-repeat: no-repeat;
}

@media (max-width: 576px) {
    body {
        background-position: 50px -50px;
        background-size: 500px;
    }

    #cta {
        background-image: url('../assets/bg-simplify-section-mobile.svg');
    }
}

.hamburger {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: all 0.25s;
    position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000;
    transform: rotate(0);
    transition: all 0.5s;
}

.hamburger-middle {
    transform: translateY(7px);
}

.hamburger-bottom {
    transform: translateY(14px);
}

.open {
    transform: rotate(90deg);
    transform: translateY(0px);
}

.open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
    display: none;
}

.open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>
