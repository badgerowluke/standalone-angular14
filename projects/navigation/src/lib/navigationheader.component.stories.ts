import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import { NavigationHeaderComponent } from './navigationheader.component';

export default {
    title: "Navigation/Header",
    component: NavigationHeaderComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        }),
    ]
} as Meta;

const Template: Story<NavigationHeaderComponent> = (args: NavigationHeaderComponent) => ({
    props: args,
})

export const base = Template.bind({})