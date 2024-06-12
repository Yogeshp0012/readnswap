import { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
    title: "Home/FooterComponent",
    component: FooterComponent
};
export default meta;

type footerStory = StoryObj<FooterComponent>;

export const primary: FooterComponent = {
    args: {}
};
