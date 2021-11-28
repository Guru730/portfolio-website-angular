import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importing Navbar from 'nav folder
import {Nav} from './Header/navbar/nav.component'


//importing logo
import {Logo} from './Header/navbar/logo/logo.component'
//importing let's talk  button
import {EmailButton} from './Header/navbar/letstalk/lettalk.component'

//importing head
import {HeadContent} from './Header/head/headcontent/headContent.component'


//import seeProjectButton
import {ProjectButton} from './Header/head/projectButton/projectButton.component'


//import divider
import {Divider} from './Header/universalComponent/divider/divider.component'


//import email modal
import {Modal} from './Header/navbar/letstalk/modal/modal.component'


//import card
import {Card} from './Body/projectSection/card/card.component'


//import projects section
import {ProjectSection} from './Body/projectSection/projectSection.component'

//import About  Section
import {About} from './Body/aboutSection/about.component'


//import skills Section
import {SkillSection} from './Body/skillSection/skillsSection.component'
import {SkillName} from './Body/skillSection/skillName/skillName.component'




//import footer
import {Footer} from './Footer/footer.component'
@NgModule({
  declarations: [
   AppComponent,
   Nav,
   Logo,
   EmailButton,
   HeadContent,
   ProjectButton,
   Divider,
   Modal,
   ProjectSection,
   Card,
   About,
   SkillSection,
   SkillName,
   Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
