import { Routes } from '@angular/router';
import { CourseCatalog } from './components/course-catalog/course-catalog';
import { MySchedule } from './components/my-schedule/my-schedule';

export const routes: Routes = [
    // Om man går till startsidan visas kurskatalogen
    { path: '', component: CourseCatalog },
    //om man går till /schema, visas ramschemat
    { path: 'schema', component: MySchedule },
    // catch-all som skickar tillbaka till startsidan
    { path: '**', redirectTo: '' }
];
