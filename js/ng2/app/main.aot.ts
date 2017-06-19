import 'core-js/es7/reflect';
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../../../aot/js/ng2/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
