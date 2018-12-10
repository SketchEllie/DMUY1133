const int TouchPin = 2;
const int LedPin = 6;
const int ButtonPin = 5;
const int RotaryPin = A0;
int incomingByte;

int ledState = HIGH;
int buttonState;
int lastButtonState = LOW;

unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50; 

int ADC_REF = 5;
int GROVE_VCV = 5;
int FULL_ANGLE = 300;


void setup()
{
  Serial.begin(9600);
  pinMode(6, OUTPUT);
  pinMode(2, INPUT);
  pinMode(5, INPUT);
}

void loop()
{
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
  }

  //LED Pin
  if (incomingByte == 'H') {
    digitalWrite(6, HIGH);
  }
  if (incomingByte == 'L') {
    digitalWrite(6, LOW);
  }

  //Touch Pin
   if(digitalRead(TouchPin) == 1){
    Serial.print(4);
   }
   else{
     Serial.print(6);
   }
    

  //Button Pin
  int reading = digitalRead(ButtonPin);
  if(reading != lastButtonState){
    lastDebounceTime = millis();
  }
  if((millis() - lastDebounceTime) > debounceDelay){
    if(reading != buttonState){
      buttonState = reading;
      if(buttonState == HIGH){
        Serial.print(7);
      }
      else{
        Serial.print(8);
      }
    }
  }
  lastButtonState = reading;
  /* if(digitalRead(ButtonPin) == 1 ){
     Serial.write(1);
    }*/

  //Rotary Pin
  float voltage;
  int rotary_value = analogRead(RotaryPin);
  voltage = (float)rotary_value*ADC_REF/1023;
  float degrees = (voltage*FULL_ANGLE)/GROVE_VCV;
  if((degrees > 0) && (degrees < 100)){
    Serial.print(1);
  }
  else if ((degrees >= 100) && (degrees < 200)){
    Serial.print(2);
  }
  else if ((degrees >=200) && (degrees < 300)){
    Serial.print(3);
  }

}
