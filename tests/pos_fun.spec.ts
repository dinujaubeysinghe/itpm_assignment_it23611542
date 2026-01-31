import { test, expect, Page } from '@playwright/test';

type PosFunCase = {
  id: string;
  input: string;
  expected: string;
};

const testCases: PosFunCase[] = [
  {
    id: 'Pos_Fun_0001',
    input: 'mama dhaen vaeda karanavaa.',
    expected: 'මම දැන් වැඩ කරනවා.'
  },
  {
    id: 'Pos_Fun_0002',
    input: 'api kaeema kanna yanavaa, iita passe film ekak balanavaa.',
    expected: 'අපි කෑම කන්න යනවා, ඊට පස්සෙ film එකක් බලනවා.'
  },
 {
    id: 'Pos_Fun_0003',
    input: 'api kaema kanna aavata passedha eyalaa aavee ?',
    expected: 'අපි කැම කන්න ආවට පස්සෙද එයලා ආවේ ?'
  },
  {
    id: 'Pos_Fun_0004',
    input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
    expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?'
  },
 {
    id: 'Pos_Fun_0005',
    input: 'vahaama enna.',
    expected: 'වහාම එන්න.'
  },
  {
    id: 'Pos_Fun_0006',
    input: 'Zoom meeting ekak thiyennee.',
    expected: 'Zoom meeting එකක් තියෙන්නේ.'
  },
 {
    id: 'Pos_Fun_0007',
    input: 'api kandy valata trip ekak yanna hithaagena innava. api eka labana maase maedha dhavasaka dhaagaththoth nimaltath enna puLuvan.',
    expected: 'අපි kandy වලට trip එකක් යන්න හිතාගෙන ඉන්නව. අපි එක ලබන මාසෙ මැද දවසක දාගත්තොත් නිමල්ටත් එන්න පුළුවන්.'
  },
  {
    id: 'Pos_Fun_0008',
    input: 'Rs. 1500 vagee yanne. 7.30 AM mama class ekata enavaa. ethakota mata salli dhenna.',
    expected: 'Rs. 1500 වගේ යන්නෙ. 7.30 AM මම class එකට එනවා. එතකොට මට සල්ලි දෙන්න.'
  },
 {
    id: 'Pos_Fun_0009',
    input: 'eLakiri machan supirii !!!!',
    expected: 'එළකිරි මචන් සුපිරී !!!!'
  },
  {
    id: 'Pos_Fun_0010',
    input: 'mama iiyee gedhara giyaa.',
    expected: 'මම ඊයේ ගෙදර ගියා.'
  },
 {
    id: 'Pos_Fun_0011',
    input: 'hari hari lassanayi.',
    expected: 'හරි හරි ලස්සනයි.'
  },
  {
    id: 'Pos_Fun_0012',
    input: 'mamagedharayanavaaoyathgedharayannalaeesthidha?',
    expected: 'මමගෙදරයනවාඔයත්ගෙදරයන්නලෑස්තිද?'
  },
 {
    id: 'Pos_Fun_0013',
    input: 'mama       nam           dhanne     naehae.  oyaa    oona dheyak     kara     ganna.',
    expected: 'මම       නම්           දන්නෙ     නැහැ.  ඔයා    ඕන දෙයක්     කර     ගන්න.'
  },
  {
    id: 'Pos_Fun_0014',
    input: 'ehema karala balapan',
    expected: 'එහෙම කරල බලපන්'
  },
 {
    id: 'Pos_Fun_0015',
    input: 'api colombo idhan gedhara yanakota hayiyen vahinna gaththaa. apee kavuruth Laga kudayakvath thibune naehae. eeka nisa vaessa paayanakam idhala thamayi colombo valin bus ekata naegge. bus ekata naginakotama thamayi dhaena gaththe apee yaaluvek apen miss vela kiyala. eeka nisaa api ee bus ekata naginne naethuva yaluvaava hoyanna patan gaththa.  ee veelaave api haemotama monava karannadha kiyala hitha ganna baeri vuNaa.',
    expected: 'අපි colombo ඉදන් ගෙදර යනකොට හයියෙන් වහින්න ගත්තා. අපේ කවුරුත් ළග කුඩයක්වත් තිබුනෙ නැහැ. ඒක නිස වැස්ස පායනකම් ඉදල තමයි colombo වලින් bus එකට නැග්ගෙ. bus එකට නගිනකොටම තමයි දැන ගත්තෙ අපේ යාලුවෙක් අපෙන් miss වෙල කියල. ඒක නිසා අපි ඒ bus එකට නගින්නෙ නැතුව යලුවාව හොයන්න පටන් ගත්ත.  ඒ වේලාවෙ අපි හැමොටම මොනව කරන්නද කියල හිත ගන්න බැරි වුණා.'
  },
  {
    id: 'Pos_Fun_0016',
    input: 'eeka hariyata vaeda karanavaadha?',
    expected: 'ඒක හරියට වැඩ කරනවාද?'
  },
 {
    id: 'Pos_Fun_0017',
    input: 'Trip eka yanna nam, pebaravaari 5 venidhata kalin oyaa Rs. 1500 ka advance mudhalak dhenna venavaa.',
    expected: 'Trip එක යන්න නම්, පෙබරවාරි 5 වෙනිදට කලින් ඔයා Rs. 1500 ක advance මුදලක් දෙන්න වෙනවා.'
  },
 {
    id: 'Pos_Fun_0018',
    input: 'mama kiiyatavath ehema karanne naehae.',
    expected: 'මම කීයටවත් එහෙම කරන්නේ නැහැ.'
  },
 {
    id: 'Pos_Fun_0019',
    input: 'Oyaala haemoma vahaama meheta enna oone.',
    expected: 'ඔයාල හැමොම වහාම මෙහෙට එන්න ඕනෙ.'
  },
 {
    id: 'Pos_Fun_0020',
    input: 'oyaa enavaanam mama innavaa.',
    expected: 'ඔයා එනවානම් මම ඉන්නවා.'
  },
 {
    id: 'Pos_Fun_0021',
    input: 'mata nidhimathak nam thibune naehae. eeth dhaen kiri bath kaapu nisa nidhimathayi vagee.',
    expected: 'මට නිදිමතක් නම් තිබුනෙ නැහැ. ඒත් දැන් කිරි බත් කාපු නිස නිදිමතයි වගේ.'
  },
 {
    id: 'Pos_Fun_0022',
    input: 'ee vaedee nam supiriyak machan !',
    expected: 'ඒ වැඩේ නම් සුපිරියක් මචන් !'
  },
{
    id: 'Pos_Fun_0023',
    input: 'anee !! oyaata puLuvandha mata ee udhavva karala dhenna ?',
    expected: 'අනේ !! ඔයාට පුළුවන්ද මට ඒ උදව්ව කරල දෙන්න ?'
  }

  
];

let page: Page;

for (const tc of testCases) {
  test(tc.id, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const singlishInput = page.locator('textarea').nth(0);
    const sinhalaOutput = page.locator(
      'div.whitespace-pre-wrap.overflow-y-auto'
    );

    await singlishInput.fill(tc.input);
    await expect(sinhalaOutput).not.toHaveText('', { timeout: 20000 });

    const actualText = (await sinhalaOutput.innerText()).trim();
    expect(actualText).toContain(tc.expected);
  });
}


