import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { type IParticlesProps, NgParticlesModule } from 'ng-particles';
import {
  ClickMode,
  type Container,
  type Engine,
  HoverMode,
  MoveDirection,
  OutMode,
} from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

@Component({
  standalone: true,
  imports: [CommonModule, NgParticlesModule],
  selector: 'app-particles',
  template: `
    <div class="w-[1310px] h-full absolute right-0 bottom-0">
      <div
        class="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full"
      >
        <!-- Contenedor específico para las partículas -->
        <div
          class="w-full h-full absolute mix-blend-color-dodge"
          style="z-index: -1;"
        >
          @if (particlesOptions$) {
            <ng-particles
              [id]="id"
              [options]="particlesOptions$"
              [particlesInit]="particlesInit"
              (particlesLoaded)="particlesLoaded($event)"
            ></ng-particles>
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./particles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticlesComponent implements OnInit {
  private currenteColor: string;
  protected id = 'tsparticles';
  protected particlesOptions$: IParticlesProps | undefined;

  constructor() {
    this.currenteColor = '#c48cd8';
  }
  ngOnInit(): void {
    this.particlesOptions$ = {
      background: {
        color: {
          value: 'none',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: ClickMode.repulse,
          },
          onHover: {
            enable: true,
            mode: HoverMode.bubble,
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          buble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
        },
      },
      particles: {
        color: {
          value: this.currenteColor,
        },
        links: {
          color: this.currenteColor,
          distance: 150,
          enable: false,
          opacity: 0.4,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: MoveDirection.topLeft,
          random: false,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.9,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#fff',
          },
          polygon: {
            nb_sides: 5,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
          anim: {
            enable: true,
            speed: 4,
            size_min: 0.3,
            sync: true,
          },
        },
      },
      detectRetina: true,
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  particlesLoaded(container: Container): void {}

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}
