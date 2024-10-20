import {
  applicationConfig,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SocialButtonComponent } from './social-button.component';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

const to = 'https://marcosic.netlify.app/';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SocialButtonComponent> = {
  title: 'core/SocialButton',
  component: SocialButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideClientHydration(), provideHttpClient(withFetch())],
    }),
    moduleMetadata({
      imports: [NgOptimizedImage, NgStyle],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        control: 'text',
      },
    },
    to: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    rel: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<SocialButtonComponent>;

export const WithLinearGradient: Story = {
  args: {
    to: 'some',
    rel: true,
    icon: 'linear-gradient(#f0f0f0, #f0f0f0)',
    title: 'Without icon',
  },
};

/* Default Icons */
export const GithubButton: Story = {
  args: {
    to,
    rel: true,
    icon: 'github',
    title: 'Visit Github profile',
  },
};

export const LinkedInButton: Story = {
  args: {
    to,
    rel: true,
    icon: 'linkedin',
    title: 'Visit Linkedin profile',
  },
};

export const GmailButton: Story = {
  args: {
    to,
    rel: true,
    icon: 'gmail',
    title: 'Send mail',
  },
};

export const CvButton: Story = {
  args: {
    to,
    rel: true,
    icon: 'cv',
    title: 'Download CV',
  },
};
