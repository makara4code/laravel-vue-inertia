<template>
    <Button
        class="flex items-center justify-center"
        aria-label="Toggle dark mode"
        :variant="'ghost'"
        :size="'icon'"
        @click="toggleDark()"
    >
        <component
            :is="isDark ? RadixIconsSun : RadixIconsMoon"
            class="w-[20px] h-[20px] text-foreground"
        />
    </Button>
</template>

<script setup lang="ts">
import RadixIconsMoon from '~icons/radix-icons/moon';
import RadixIconsSun from '~icons/radix-icons/sun';

import { useToggle, useDark } from '@vueuse/core';
const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = useToggle(isDark);

</script>
