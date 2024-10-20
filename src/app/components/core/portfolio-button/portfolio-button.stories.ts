import {
  applicationConfig,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PortfolioButtonComponent } from '@app/components/core/portfolio-button/portfolio-button.component';
import { fn } from '@storybook/test';
import { MoveBackgroundDirective } from '@app/lib/directives/MoveBackground.directive';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PortfolioButtonComponent> = {
  title: 'core/PortfolioButton',
  component: PortfolioButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideClientHydration(), provideHttpClient(withFetch())],
    }),
    moduleMetadata({
      imports: [MoveBackgroundDirective],
    }),
  ],
  tags: ['autodocs'],
  args: {
    size: 'DEFAULT',
    clicked: fn(),
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['DEFAULT', 'full', 'lg', 'md', 'sm'],
    },
  },
  render: (args) => ({
    props: args,
    template: `<portfolio-button [size]="size" (clicked)="fn()">Click Me!</portfolio-button>`,
  }),
};

export default meta;
type Story = StoryObj<PortfolioButtonComponent>;

export const Default: Story = {};
