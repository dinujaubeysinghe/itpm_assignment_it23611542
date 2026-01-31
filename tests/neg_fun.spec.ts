import { test, expect, Page } from '@playwright/test';

type NegFunCase = {
  id: string;
  input: string;
  expected: string; 
};

const negativeCases: NegFunCase[] = [
  {
    id: 'Neg_Fun_0001',
    input: 'adoo machn eeka hariyata karpn',
    expected: 'අඩෝ මචන් ඒක හරියට කරපන්' 
  },
  {
    id: 'Neg_Fun_0002',
    input: 'mam gdr yann hdnne. Oylth enovnm enn ape gdr',
    expected: 'මම ගෙදර යන්න හදන්නේ. ඔයාලත් එනවනම් එන්න අපේ ගෙදර'
  },
  
  {
    id: 'Neg_Fun_0003',
    input: 'pls mta oyge vatura botle gnn pluvnd ?',
    expected: 'ප්ලීස් මට ඔයාගේ වතුර බෝතලේ ගන්න පුළුවන්ද ?'
  },

  {
    id: 'Neg_Fun_0004',
    input: 'mama,, gedara?? yanavaa!!',
    expected: 'මම,, ගෙදර?? යනවා!!'
  },

  {
    id: 'Neg_Fun_0005',
    input: 'mama handha balanna godak aasayi',
    expected: 'මම හඳ බලන්න ගොඩක් ආසයි'
  },

  {
    id: 'Neg_Fun_0006',
    input: 'mata vidhyaavata lakunu thibbe 70 yi',
    expected: 'මට විද්‍යාවට ලකුනු තිබ්බෙ 70 යි'
  },

  {
    id: 'Neg_Fun_0007',
    input: 'mee dhawas wala watawala thee prasidhDhayi.',
    expected: 'මේ දවස් වල වටවල තේ ප්‍රසිද්ධයි.'
  },

  {
    id: 'Neg_Fun_0008',
    input: 'mama kama kava',
    expected: 'මම කෑම කෑවා'
  },

  {
    id: 'Neg_Fun_0009',
    input: 'oyala kaala nathnam enna. api laga oyalatath ekka kama thiyenava',
    expected: 'ඔයාලා කාලා නැත්නම් එන්න. අපි ළඟ ඔයාලටත් එක්ක කෑම තියෙනවා'
  },

  {
    id: 'Neg_Fun_0010',
    input: 'mama mee wadath ekka hira wela inne. oyata pluwanda mata udhaw karanna ?',
    expected: 'මම මේ වැඩත් එක්ක හිර වෙලා ඉන්නේ. ඔයාට පුලුවන්ද මට උදව් කරන්න ?'
  }
  
];

test.describe('Negative Functional Tests - Known System Failures', () => {
  
  for (const tc of negativeCases) {
    test(tc.id, async ({ page }) => {
      
      test.fail(true, 'System does not currently support this complex transliteration logic.');

      await page.goto('https://www.swifttranslator.com/');

      const singlishInput = page.locator('textarea').nth(0);
      const sinhalaOutput = page.locator('div.whitespace-pre-wrap.overflow-y-auto');

      await singlishInput.fill(tc.input);

      
      await expect(sinhalaOutput).not.toHaveText('', { timeout: 10000 });
      const actualText = (await sinhalaOutput.innerText()).trim();

      
      expect(actualText).toContain(tc.expected);
    });
  }
});