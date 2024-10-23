import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  tsParticles
} from "./chunk-OT4IYA6D.js";
import {
  isPlatformServer
} from "./chunk-YOBEFHDP.js";
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-KZ7G73KP.js";
import {
  require_cjs
} from "./chunk-2H3L6IVL.js";
import {
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ng-particles/fesm2022/ng-particles.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var NgParticlesComponent = class _NgParticlesComponent {
  platformId;
  options;
  url;
  id;
  particlesInit;
  particlesLoaded = new EventEmitter();
  destroy$ = new import_rxjs.Subject();
  container;
  constructor(platformId) {
    this.platformId = platformId;
    this.id = "tsparticles";
  }
  ngAfterViewInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    const cb = (container) => {
      this.container = container;
      this.particlesLoaded.emit(container);
    };
    (0, import_rxjs.from)(this.particlesInit ? this.particlesInit(tsParticles) : Promise.resolve()).pipe((0, import_rxjs.mergeMap)(() => {
      if (this.url) {
        return tsParticles.loadJSON(this.id, this.url);
      } else if (this.options) {
        return tsParticles.load(this.id, this.options);
      } else {
        console.error("You must specify options or url to load tsParticles");
        return import_rxjs.EMPTY;
      }
    }), (0, import_rxjs.takeUntil)(this.destroy$)).subscribe(cb);
  }
  ngOnDestroy() {
    this.container?.destroy();
    this.destroy$.next();
  }
  static ɵfac = function NgParticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgParticlesComponent)(ɵɵdirectiveInject(PLATFORM_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgParticlesComponent,
    selectors: [["ng-particles"]],
    inputs: {
      options: "options",
      url: "url",
      id: "id",
      particlesInit: "particlesInit"
    },
    outputs: {
      particlesLoaded: "particlesLoaded"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "id"]],
    template: function NgParticlesComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("id", ctx.id);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgParticlesComponent, [{
    type: Component,
    args: [{
      selector: "ng-particles",
      template: '<div [id]="id"></div>'
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    options: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    particlesInit: [{
      type: Input
    }],
    particlesLoaded: [{
      type: Output
    }]
  });
})();
var ParticlesComponent = class _ParticlesComponent extends NgParticlesComponent {
  platformId;
  constructor(platformId) {
    super(platformId);
    this.platformId = platformId;
  }
  static ɵfac = function ParticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParticlesComponent)(ɵɵdirectiveInject(PLATFORM_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ParticlesComponent,
    selectors: [["Particles"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "id"]],
    template: function ParticlesComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("id", ctx.id);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParticlesComponent, [{
    type: Component,
    args: [{
      selector: "Particles",
      template: '<div [id]="id"></div>'
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var NgParticlesModule = class _NgParticlesModule {
  static ɵfac = function NgParticlesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgParticlesModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgParticlesModule,
    declarations: [NgParticlesComponent, ParticlesComponent],
    exports: [NgParticlesComponent, ParticlesComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgParticlesModule, [{
    type: NgModule,
    args: [{
      declarations: [NgParticlesComponent, ParticlesComponent],
      exports: [NgParticlesComponent, ParticlesComponent]
    }]
  }], null, null);
})();
export {
  NgParticlesComponent,
  NgParticlesModule,
  ParticlesComponent
};
//# sourceMappingURL=ng-particles.js.map
