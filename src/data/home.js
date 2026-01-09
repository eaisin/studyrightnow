import { Calendar, Users, BookOpen } from "lucide-react";

export const homeData = {
  hero: {
    title: {
      line1: "Software Engineer",
      line2: "ကောင်း တစ်ယောက်ဖြစ်ဖို့",
      line3Brand: "StudyRightNow",
      line3Suffix: "မှာ စတင်လိုက်ပါ။",
    },
    description: `Programming လေ့လာတာဟာ ဘောလုံးကန်တာနဲ့ တူပါတယ်။ ဘောလုံးပွဲကြည့်ပြီး ကျွမ်းကျင်သွားတဲ့သူ မတွေ့ဖူးပါဘူး။ ကိုယ်တိုင်လေ့ကျင့်မှရပါတယ်။ ဒီလိုပါပဲ coding လေ့လာတဲ့အခါ သူများရေးထားတာ နားလည်ဖို့လွယ်ပါတယ်။ ဒါပေမဲ့ ရေးတတ်ဖို့ရာတော့ ကိုယ်တိုင်လေ့ကျင့်မှ ရမှာပါ။`,
  },
  stats: [
    {
      id: 1,
      label: "Founded",
      value: "2019",
      icon: Calendar,
    },
    {
      id: 2,
      label: "Students",
      value: "2,916",
      icon: Users,
    },
    {
      id: 3,
      label: "Courses",
      value: "19+",
      icon: BookOpen,
    },
  ],
};
