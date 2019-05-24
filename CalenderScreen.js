/*This is an Example of Calendar With Events*/
import React, {Component} from "react";
//import react in our project
import { Dimensions, View, StyleSheet, Button, ScrollView } from "react-native";
//import basic react native components
import EventCalendar from "react-native-events-calendar";
//import EventCalendar component
let { width } = Dimensions.get('window');
//get the size of device

export default class CalenderScreen extends Component {
  constructor(props) {
    super(props);
    //Dummy event data to list in calendar 
    //You can also get the data array from the API call
    this.state = {
      events: [
        {
          start: '2019-05-22 00:00:00',
          end: '2019-05-22 24:00:00',
          title: 'Nuzul Quran',
         
          
        },{
          start: '2019-05-06 00:00:00',
          end: '2019-05-06 24:00:00',
          title: 'Awal Ramadhan',
          summary: 'The Prophet (saw) told us that the devils are chained in the month of Ramadan. With the devils chained, it means we can no longer blame the shaytan�s whispers for our misgivings in the holy month. Our wrongdoings are solely our responsibility.',
        },{
          start: '2019-05-07 00:00:00',
          end: '2019-05-07 24:00:00',
          title: '2nd Ramadhan',
          
          
        },{
          start: '2019-05-08 00:00:00',
          end: '2019-05-08 24:00:00',
          title: '3rd Ramadhan',
          
          
        },{
          start: '2019-05-09 00:00:00',
          end: '2019-05-09 24:00:00',
          title: '4th Ramadhan',
          
          
        },{
          start: '2019-05-10 00:00:00',
          end: '2019-05-10 24:00:00',
          title: '5th Ramadhan',
          
          
        },{
          start: '2019-05-11 00:00:00',
          end: '2019-05-11 24:00:00',
          title: '6th Ramadhan',
          
          
        },{
          start: '2019-05-12 00:00:00',
          end: '2019-05-12 24:00:00',
          title: '7th Ramadhan',
          
          
        },{
          start: '2019-05-13 00:00:00',
          end: '2019-05-13 24:00:00',
          title: '8th Ramadhan',
          
          
        },{
          start: '2019-05-14 00:00:00',
          end: '2019-05-14 24:00:00',
          title: '9th Ramadhan',
          
          
        },{
          start: '2019-05-15 00:00:00',
          end: '2019-05-15 24:00:00',
          title: '10th Ramadhan',
          
          
        },{
          start: '2019-05-16 00:00:00',
          end: '2019-05-16 24:00:00',
          title: '11th Ramadhan',
          
          
        },{
          start: '2019-05-17 00:00:00',
          end: '2019-05-17 24:00:00',
          title: '12th Ramadhan',
          
          
        },{
          start: '2019-05-18 00:00:00',
          end: '2019-05-18 24:00:00',
          title: '13th Ramadhan',
          
          
        },{
          start: '2019-05-19 00:00:00',
          end: '2019-05-19 24:00:00',
          title: '14th Ramadhan',
          
          
        },{
          start: '2019-05-20 00:00:00',
          end: '2019-05-20 24:00:00',
          title: '15th Ramadhan',
          
        
          
        },{
          start: '2019-05-21 00:00:00',
          end: '2019-05-21 24:00:00',
          title: '16th Ramadhan',
          
          
        },{
          start: '2019-05-22 00:00:00',
          end: '2019-05-22 24:00:00',
          title: '17th Ramadhan',
          
          
        },{
          start: '2019-05-23 00:00:00',
          end: '2019-05-23 24:00:00',
          title: '18th Ramadhan',
          
          
        },{
          start: '2019-05-24 00:00:00',
          end: '2019-05-24 24:00:00',
          title: '19th Ramadhan',
          summary:'To be merciful is to show forgiveness and compassion to those in need. We are blessed if we are merciful, because mercy is something God Himself displays and it consists of treating people better than they deserve from us.Forgiveness is a type of mercy, as is aiding someone whom we have no obligation to help, or forbearing to exploit someone�s vulnerability. We should help others, regardless of how we feel about them or what our relationship is to them. Who are we to ask Allah (swt) to forgive and have mercy on us if we cannot share the same sentiment with our fellow humans, who are just as fallible as we are?This Ramadan forgive, help those in need, and remember Allah.',
          
          
        },{
          start: '2019-05-25 00:00:00',
          end: '2019-05-25 24:00:00',
          title: '20th Ramadhan',
          summary:'Now we�re in the last ten days of Ramadan, don�t miss out on the reward of having your charity multiplied',
          
        },{
          start: '2019-05-26 00:00:00',
          end: '2019-05-26 24:00:00',
          title: '21th Ramadhan',
          summary:'This month is not just about starving yourself, Ramadan is also about the mind. This month is about eliminating ourselves of anger, being patient and letting our souls be cleansed of any hate or frustration. It�s about not allowing your emotions to overtake your life. Abstain from yelling, gossiping and jealousy overall. Doing little positive things like saying hello to a stranger are part of cleansing yourself during this important month.',
          
          
        },{
          start: '2019-05-27 00:00:00',
          end: '2019-05-27 24:00:00',
          title: '22th Ramadhan',
          summary:'Allah (swt) says in the holy Quran, �You are the best nation produced [as an example] for mankind. You enjoin what is right and forbid what is wrong and believe in Allah.� � 3:110�Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.� � 16:125',
          
        },{
          start: '2019-05-28 00:00:00',
          end: '2019-05-28 24:00:00',
          title: '23th Ramadhan',
          summary:'The Prophet Muhammad (saw) said, �Whoever prays Fajr is under the protection of Allah,� and, �The two sunnah cycles of prayer preceding Fajr prayer are better than this world and all that it contains� (Muslim).Surely, Fajr is one of the hardest salah prayers, and with the days being so long, we�re all pretty drained during this time. But it is during Fajr (and Asr) time in which the angels are asked by Allah (swt) what His servants are doing.',
          
          
        },{
          start: '2019-05-29 00:00:00',
          end: '2019-05-29 24:00:00',
          title: '24th Ramadhan',
          summary:'Before breaking your fast, sit with your food in front of you and ask Allah whatever your heart desires. Abu Hurayra narrates that the prophet had said, �Whatever is prayed for at the time of breaking the fast is granted and never refused.� (Tirmidhi)',
          
          
        },{
          start: '2019-05-30 00:00:00',
          end: '2019-05-30 24:00:00',
          title: '25th Ramadhan',
          summary:'Layatul Qadr is the most holy night for Muslims. Unfortunately, we don�t know exactly when that night is, except that it falls on the last ten days of Ramadan.Muhammad (saw) said, �Look for the Night of Qadr in the last ten nights of Ramadan on the night when nine or seven or five nights remain out of the last ten nights of the Ramadan.� � Bukhari.Also regarding the night, it was narrated by Aisha (ra) that the Prophet (saw) had said, �Whoever prays during the night of Qadr with faith and hoping for its reward will have all of his previous sins forgiven.� � Bukhari.Recite the this dua over and over in the last ten nights, and if Allah wills, all your past sins will be wiped away.',
          
        },{
          start: '2019-05-31 00:00:00',
          end: '2019-05-31 24:00:00',
          title: '26th Ramadhan',
          summary:'Hasan al-Basri said, �Improve your performance in what is left (of time) and you will be forgiven for that which has already passed. So take special care of the time you have left because you do not know when your soul will be turned over to Allah�s Mercy.�',
          
        },{
          start: '2019-06-01 00:00:00',
          end: '2019-06-01 24:00:00',
          title: '27th Ramadhan',
          summary:'Now we�re in the last ten days of Ramadan, don�t miss out on the reward of having your charity multiplied',
          
        },{
          start: '2019-06-02 00:00:00',
          end: '2019-06-02 24:00:00',
          title: '28th Ramadhan',
          summary:'The ninety-nine parts of Allah�s (swt) mercy is reserved for the Day of Judgement. The one single part of mercy, which He sent down is the cause of all the love and care that is seen on earth by any and all creatures, since creatures first came into existence, until the end of their existence at the end of time.',
          
        },{
          start: '2019-06-03 00:00:00',
          end: '2019-06-03 24:00:00',
          title: '29th Ramadhan',
          summary:'Greet others with a smile on your face, after all it is a form of sadaqah. However, make sure that smile doesn�t make anyone want to cringe. It�s Sunnah to use the Miswak after eating, and in doing so, you will receive a great reward from Allah.We should also use it before praying, as the Prophet Muhammad (saw) said,�Had I not thought it difficult for my ummah, I would have commanded them to use the Miswak before every salah.? (Muslim)',
          
        },{
          start: '2019-06-04 00:00:00',
          end: '2019-06-04 24:00:00',
          title: '30th Ramadhan',
          summary:'Get into the habit this Ramadan, and then upon its completion, continue during the following times for when it is also Sunnah:1.For the recitation of the Qur�an.2. For the recitation of Hadith.3. When the mouth emits an odour. 4. For the learning or teaching of virtues of Islam. 5. For making Dhikr.6. After entering one�s home.7. Before entering any good gathering.8. When experiencing pangs of hunger and thirst. 9. After the signs of death are evident. 10. At the time of sehri. 11. Before and after meals.12. Before undertaking a journey. 13. On returning from a journey. 14. Before sleeping. 15. Upon awakening.',
          
        },
        {
          start: '2019-06-05 00:00:00',
          end: '2019-06-05 24:00:00',
          title: 'Eidul Fitri',
          summary: '1st of Syawal',
        },
     
      
      ],
    };
  }

  eventClicked(event) {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  }

  render() {
    return (
    
    //<ScrollView style={styles.containerScroll}>
      <View style={{ flex:1, marginTop: 20 }}>
        <EventCalendar
          eventTapped={this.eventClicked.bind(this)}
          //Function on event press
          events={this.state.events}
          font={20}
          //passing the Array of event
          width={width}
          //Container width
          size={60}
          //number of date will render before and after initDate 
          //(default is 30 will render 30 day before initDate and 29 day after initDate)
          initDate={'2019-05-24'}
          //show initial date (default is today)
          scrollToFirst
          //scroll to first event of the day (default true)
         
        />

        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
        <Button onPress={() => this.props.navigation.navigate('Compass')} title="Compass" />
        <Button onPress={() => this.props.navigation.navigate('Date')} title="Date" />
        </View>
      </View>
    //</ScrollView>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E3E3E3'
    },
    containerScroll: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#E3E3E3'
    },
     button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    }
  });