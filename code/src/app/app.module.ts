import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms'
import { DatePicker } from '@ionic-native/date-picker';
import { Pal } from './app.component';
import { SignUpPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientService } from './services/http-client.service';
import { ProfileDatastoreService } from './services/profile-datastore.service';
import { UserService } from './services/user.service';
import { UserDataStoreService } from './services/user-data-store.service';
import { HttpModule } from '@angular/http';
import { CrewService } from './services/crew.service';
import { HangoutService } from './services/hangout.service';

import { HomePageModule } from '../pages/home/home.module' 
import { ProfilePageModule } from '../pages/profile/profile.module' 
import { ReminderPageModule} from '../pages/reminder/reminder.module' 
import { WallPageModule} from '../pages/wall/wall.module' 
import { SocialPageModule} from '../pages/social/social.module' 
import { HangoutsPageModule} from '../pages/hangouts/hangouts.module' 
import { PrivacyPageModule} from '../pages/privacy/privacy.module' 
import { IntroPageModule} from '../pages/intro/intro.module' 
import { LoginPageModule} from '../pages/login/login.module' 
import { ImagePicker } from '@ionic-native/image-picker'
import { CrewsPageModule} from '../pages/crews/crews.module' 
import { CrewPageModule} from '../pages/crew/crew.module' 
import { MycrewsPageModule} from '../pages/mycrews/mycrews.module' 
import { EditusernamePageModule }from '../pages/editusername/editusername.module' 
import { MapPageModule }from '../pages/map/map.module' 
import { PostitPageModule }from '../pages/postit/postit.module' 
import { InstagramPageModule }from '../pages/instagram/instagram.module' 
import { TwiiterPageModule }from '../pages/twiiter/twiiter.module' 
import { RankingsPageModule }from '../pages/rankings/rankings.module' 
import { RatingsPageModule }from '../pages/ratings/ratings.module' 
import { ProfilemenupopPageModule }from '../pages/profilemenupop/profilemenupop.module' 
import { QrpagePageModule }from '../pages/qrpage/qrpage.module' 
import { RatingPopModule }from '../pages/ratingpopover.module' 
import { RankingPopModule }from '../pages/rankingpopover.module' 
import { CreatehangoutPageModule }from '../pages/createhangout/createhangout.module' 
import { EventypePageModule }from '../pages/eventype/eventype.module' 
import { MoodupdatePageModule }from '../pages/moodupdate/moodupdate.module' 
import { EditprofilePageModule }from '../pages/editprofile/editprofile.module' 
import { CrewcreationPageModule }from '../pages/crewcreation/crewcreation.module' 
import { CrewMembersPageModule }from '../pages/crew-members/crew-members.module' 
import { RemindercreationPageModule }from '../pages/remindercreation/remindercreation.module' 
import { PostlinkPageModule }from '../pages/postlink/postlink.module' 
import { PostpicPageModule }from '../pages/postpic/postpic.module' 
import { PostsoundPageModule }from '../pages/postsound/postsound.module' 
import { PosttextPageModule }from '../pages/postext/postext.module' 
import { PostvideoPageModule }from '../pages/postvideo/postvideo.module' 
import { PostsettingsPageModule }from '../pages/postsettings/postsettings.module' 
import { CrewsearchPageModule }from '../pages/crewsearch/crewsearch.module' 
import { EventsearchPageModule }from '../pages/eventsearch/eventsearch.module' 
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
@NgModule({
  declarations: [
    Pal,
    SignUpPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(Pal),
    FormsModule,
    HomePageModule,
    ProfilePageModule,
    ReminderPageModule,
    WallPageModule,
    SocialPageModule,
    HangoutsPageModule,
    PrivacyPageModule,
    IntroPageModule,
    LoginPageModule,
    CrewsPageModule,
    MycrewsPageModule,
    CrewPageModule,
    EditusernamePageModule,
    MapPageModule,
    PostitPageModule,
    InstagramPageModule,
    TwiiterPageModule,
    RankingsPageModule,
    RatingsPageModule,
    ProfilemenupopPageModule,
    QrpagePageModule,
    RatingPopModule,
    RankingPopModule,
    CreatehangoutPageModule,
    EventypePageModule,
    MoodupdatePageModule,
    EditprofilePageModule,
    CrewcreationPageModule,
    RemindercreationPageModule,
    PostlinkPageModule,
    PostpicPageModule,
    PostsoundPageModule,
    PosttextPageModule,
    PostvideoPageModule,
    PostsettingsPageModule,
    CrewsearchPageModule,
    EventsearchPageModule,
    CrewMembersPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Pal,
    SignUpPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    DatePicker,
    SplashScreen,
    HttpClientService,
    ProfileDatastoreService,
    UserService,
    ImagePicker,
    GoogleMaps,
    InAppBrowser,
    UserDataStoreService,
    CrewService,
    BarcodeScanner,
    FileTransfer,
    HangoutService,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
