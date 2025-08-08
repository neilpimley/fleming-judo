import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhyJudoComponent } from './why-judo/why-judo.component';
import { OfferComponent } from './offer/offer.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why-judo', component: WhyJudoComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
