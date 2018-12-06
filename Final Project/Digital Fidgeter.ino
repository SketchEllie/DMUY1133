const int TouchPin = 2;
const int LedPin = 6;
const int ButtonPin = 5;
const int RotaryPin = A0;
int incomingByte;

int ADC_REF = 5;
int GROVE_VCV = 5;
int FULL_ANGLE = 300;


void setup()
{
  Serial.begin(9600);
  pinMode(6, OUTPUT);
  pinMode(2, INPUT);
  pinMode(5, OUTPUT);
  pinMode(3, OUTPUT);
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
  /* if(digitalRead(TouchPin) == 1){
    }
    else{
     Serial.write("not touched");
    }*/

  //Button Pin
  /* if(digitalRead(ButtonPin) == 1 ){
     Serial.write(1);
    }*/

  //Rotary Pin
  float voltage;
  int rotary_value = analogRead(RotaryPin);
  voltage = (float)rotary_value*ADC_REF/1023;
  float degrees = (voltage*FULL_ANGLE)/GROVE_VCV;
  Serial.println(degrees);

}
