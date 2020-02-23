const IRAN_BANK_INFO = [
    {
        name: 'eghtesad-novin',
        fa_name: 'بانک اقتصاد نوین',
        account_id: [627412],
        sheba_id: 055,
    },
    {
        name: 'ansar',
        fa_name: 'بانک انصار',
        account_id: [627381],
        sheba_id: 055,
    },
    {
        name: 'iranzamin',
        fa_name: 'بانک ایران‌زمین',
        account_id: [505785],
        sheba_id: 055,
    },
    {
        name: 'parsian',
        fa_name: 'بانک پارسیان',
        account_id: [622106, 639194, 627884],
        sheba_id: 054,
    },
    {
        name: 'pasargad',
        fa_name: 'بانک پاسارگاد',
        account_id: [639347, 502229],
        sheba_id: 057,
    },
    {
        name: 'ayandeh',
        fa_name: 'بانک آینده',
        account_id: [636214],
        sheba_id: 055,
    },
    {
        name: 'tejarat',
        fa_name: 'بانک تجارت',
        account_id: [627353],
        sheba_id: 018,
    },
    {
        name: 'tose-e-taavon',
        fa_name: 'بانک توسعه‌تعاون',
        account_id: [627884],
        sheba_id: 055,
    },
    {
        name: 'tose-e-saderat',
        fa_name: 'بانک توسعه‌صادرات',
        account_id: [627648, 207177],
        sheba_id: 020,
    },
    {
        name: 'hekmate-iranian',
        fa_name: 'بانک حکمت‌ایرانیان',
        account_id: [636949],
        sheba_id: 055,
    },
    {
        name: 'day',
        fa_name: 'بانک دی',
        account_id: [502938],
        sheba_id: 055,
    },
    {
        name: 'refah-e-kargaran',
        fa_name: 'بانک رفاه‌کارگران',
        account_id: [589463],
        sheba_id: 013,
    },
    {
        name: 'saman',
        fa_name: 'بانک سامان',
        account_id: [621986],
        sheba_id: 056,
    },
    {
        name: 'sepah',
        fa_name: 'بانک سپه',
        account_id: [589210],
        sheba_id: 015,
    },
    {
        name: 'sarmayeh',
        fa_name: 'بانک سرمایه',
        account_id: [639607],
        sheba_id: 058,
    },
    {
        name: 'sina',
        fa_name: 'بانک سینا',
        account_id: [639346],
        sheba_id: 055,
    },
    {
        name: 'shahr',
        fa_name: 'بانک شهر',
        account_id: [502806],
        sheba_id: 055,
    },
    {
        name: 'saderat',
        fa_name: 'بانک صادرات‌ایران',
        account_id: [603769],
        sheba_id: 019,
    },
    {
        name: 'sanat-o-maadan',
        fa_name: 'بانک صنعت و معدن',
        account_id: [627961],
        sheba_id: 011,
    },
    {
        name: 'mehr',
        fa_name: 'بانک قرض‌الحسنه مهر',
        account_id: [606373, 636795],
        sheba_id: 055,
    },
    {
        name: 'ghavamin',
        fa_name: 'بانک قوامین',
        account_id: [639599],
        sheba_id: 055,
    },
    {
        name: 'kar-afarin',
        fa_name: 'بانک کارآفرین',
        account_id: [627488, 502910],
        sheba_id: 053,
    },
    {
        name: 'keshavarzi',
        fa_name: 'بانک کشاورزی',
        account_id: [603770, 502910],
        sheba_id: 016,
    },
    {
        name: 'gardeshgari',
        fa_name: 'بانک گردشگری',
        account_id: [505416],
        sheba_id: 055,
    },
    {
        name: 'maskan',
        fa_name: 'بانک مسکن',
        account_id: [628023],
        sheba_id: 014,
    },
    {
        name: 'mellat',
        fa_name: 'بانک ملت',
        account_id: [610433, 991975],
        sheba_id: 012,
    },
    {
        name: 'melli',
        fa_name: 'بانک ملی ایران',
        account_id: [603799],
        sheba_id: 017,
    },
    {
        name: 'mehr-e-eghtesad',
        fa_name: 'بانک مهراقتصاد',
        account_id: [639370],
        sheba_id: 055,
    },
    {
        name: 'post',
        fa_name: 'پست‌بانک ایران',
        account_id: [627760],
        sheba_id: 021,
    },
    {
        name: 'tose-e',
        fa_name: 'موسسه‌اعتباری توسعه',
        account_id: [628157],
        sheba_id: 051,
    },
    {
        name: 'kosar',
        fa_name: 'موسسه‌اعتباری کوثر',
        account_id: [505801],
        sheba_id: 055,
    }
]

function getBank(account_id){
    const bank = IRAN_BANK_INFO.find(item => item.account_id.includes(parseInt(account_id)))
    if(!bank){
        return ''
    }
    return bank.fa_name
}
