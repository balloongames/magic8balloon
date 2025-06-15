<script setup lang="ts">
import asISeeItYes from '@/assets/images/as_i_see_it_yes.jpg';
import askAgainLater from '@/assets/images/ask_again_later.jpg';
import better_notTellYouNow from '@/assets/images/better_not_tell_you_now.jpg';
import cannotPredictNow from '@/assets/images/cannot_predict_now.jpg';
import concentrateAndAskAgain from '@/assets/images/concentrate_and_ask_again.jpg';
import dontCountOnIt from '@/assets/images/dont_count_on_it.jpg';
import itIsCertain from '@/assets/images/it_is_certain.jpg';
import itIsDecidedlySo from '@/assets/images/it_is_decidedly_so.jpg';
import mostLikely from '@/assets/images/most_likely.jpg';
import myReplyIsNo from '@/assets/images/my_reply_is_no.jpg';
import mySourcesSayNo from '@/assets/images/my_sources_say_no.jpg';
import outlookGood from '@/assets/images/outlook_good.jpg';
import outlookNotSoGood from '@/assets/images/outlook_not_so_good.jpg';
import replyHazyTryAgain from '@/assets/images/reply_hazy_try_again.jpg';
import signsPointToYes from '@/assets/images/signs_point_to_yes.jpg';
import veryDoubtful from '@/assets/images/very_doubtful.jpg';
import withoutADoubt from '@/assets/images/without_a_doubt.jpg';
import yesDefinitely from '@/assets/images/yes_definitely.jpg';
import yes from '@/assets/images/yes.jpg';
import youMayRelyOnIt from '@/assets/images/you_may_rely_on_it.jpg';

defineProps({
    response: { type: String, required: true },
})

const imageMap = new Map()
imageMap.set('As I see it, yes', asISeeItYes)
imageMap.set('Ask again later', askAgainLater)
imageMap.set('Better not tell you now', better_notTellYouNow)
imageMap.set('Cannot predict now', cannotPredictNow)
imageMap.set('Concentrate and ask again', concentrateAndAskAgain)
imageMap.set('Don\'t count on it', dontCountOnIt)
imageMap.set('It is certain', itIsCertain)
imageMap.set('It is decidedly so', itIsDecidedlySo)
imageMap.set('Most likely', mostLikely)
imageMap.set('My reply is no', myReplyIsNo)
imageMap.set('My sources say no', mySourcesSayNo)
imageMap.set('Outlook good', outlookGood)
imageMap.set('Outlook not so good', outlookNotSoGood)
imageMap.set('Reply hazy, try again', replyHazyTryAgain)
imageMap.set('Signs point to yes', signsPointToYes)
imageMap.set('Very doubtful', veryDoubtful)
imageMap.set('Without a doubt', withoutADoubt)
imageMap.set('Yes', yes)
imageMap.set('Yes definitely', yesDefinitely)
imageMap.set('You may rely on it', youMayRelyOnIt)
</script>
<template>
    <div class="max-w-[80vw] max-h-[80vh] flex items-center justify-center">
        <img :src="imageMap.get($props.response)" class="max-w-full max-h-full border-4 border-white object-contain" />
    </div>
</template>