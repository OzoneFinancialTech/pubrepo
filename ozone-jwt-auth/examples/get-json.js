const JwtAuth = require('../src/jwt-auth.js');

async function go() {
  const httpClientParams = {
    url: 'http://localhost:3050/hello-with-jwt',
    headers: {
      // 'x-cert-dn': 'CN=HQuZPIt3ipkh33Uxytox1E,OU=0015800001041RHAAY,O=OpenBanking,C=GB'
      'x-cert-dn': 'CN=HQuZPIt3ipkh33Uxytox1E,OU=b,O=OpenBanking,C=GB'
    }
  };

  const signingParams = {
    alg: 'PS256',
    iss: 'OpenBanking',
//    sub: '0015800001041RHAAY',
    sub: 'b',
    aud: 'aud',
    validity: 30,
    customClaims: {
      alpha: '10',
      gamma: 2
    },
    privateKey: {
      kty: 'RSA',
      kid: '1szqu9t73biQj5d22U4NoZIj1-O6_eLUxcKM9FgKWoY',
      use: 'sig',
      e: 'AQAB',
      n: 'urbdNsukdY1N9ilJXQ9HHOaIVE7UfhiSq6XUoR-OwhevBe6EdcQJhDvS5KZpP6GYFcqKL-H3hsfUvqNcMBbwWa-wXhQPurmeDXbzLpbIr2zXeYMZ980-zIWdUn_M91C7AYX2MdkahdormpF2Gky_GqaDXB9tBgGZVpsLibF-MmHf9oNIW0FaJaY9zQueZ3upMGGYU6JDrehDMgx6dHhXGNS_mCdGbhXEhU3qMvY5YDWuKYotUSQag88nyqHBvjf9ipnymTSEEUlg0FZu55cA-OOsFwXoQMUJyUpfZhQvhBeKo5GeXtDRXXxESbop4YYGrFfItMggjn5qVzzTLr-85w',
      d: 'CbQjPwvKWkmjuZ1fsLRwj7Hzd9448Oy6Aq21pUIMm027zOUegThU_khVp4h2g9YUH13NXLuzr4-HIPlAe0dV6nNVCS6luqCW9EAwV0WC3Isdj7UejmBeWSbAjF8T-e56KZQavXB5DmfOSFQy_R7r96ibvxfrBJrkqzmXmepdkqSo0JCu3-aaVMh_4yQ-pu-KoZs7sQ-B8XpDx5_WgvLDotm-VX4rmR-adTNfzPi2XMqpahnk5KnOLqWVA96WqieAXW45Gp9EjVZ9mbB0vX3uennrco5eMc0COxH6O7gKM1RHc6fUfRVfJyclIsGn23mQlO2I79VOe7_WMnnvK3ttcQ',
      p: '4bBKxN4itaWFQUjw9z2ehm0vZ3EIpksHWzSNHTAKIx4f_DuVlrddKn5-J93HbxYxbDDDVFI27G_blO_qeGJRQr5DbpFKouMdtmoOJfmF2nd2L-vx6NtBx37GdLab_IR4ln4pDGPG4ZpiPeHx6sOhfN2iMMQGs-57gg7l7VE3bys',
      q: '08qK7saEPlO4nKMPi2pWep15pan9DZp7fnjKg_3VR9nU_lh484__b2y-PxMnBgEu7xYkRhagADIIpO8wjpofXMa7V59CyFTgIgsINwuhT_bMy6dCPZ4YE4jiOLnSP6xOUmdNzUoeg1b_Pu8p6QwMOCUi43M3tGZp4fILT-MMqzU',
      dp: 'Jv_s27o7K0KQFWkCYuceBsLFZ02sHfhnLAaXwAx2I_1nr5GoVuQW0GoNaNw1Q2gFYFnI10Bhx1fJDSKsVONAgZUZV_j5ec5faw9GpJ9K1ya_oKZYJlIFOvEYYEDSEb_eirsAYui3DHM-OM1bnaLyu_4cseqd8efrJd1nNCxNtQM',
      dq: 'HMLwwyRqaRxtgbgTMFesjtI75ueC2goUo0Q8HFioUi2e4zuYkVsI0VTvMRmkvwgCG63iFzKTX_NrgRqKeZMslyjV4DxckWAVYAonf3Iw4e8eOLnqIPwLQPvh3No_Vy5LJJ2qzyo1oph56U4JXwCn2CgS6NiIxBL0Zh68soie-9E',
      qi: 'sUC8qnZXlHO1K-F48tnEfSvCectmGqdCOL9B2MgnPK2mp9NgCM5dRVzodG5x7TG9Sw7h9en975s3g1K_btnlC5XC3z_I4M--IpzpIMYYXhzdAewovzzrwCTX3tHUQBSnIoP0IHCcI_MHy0aVS8KYVQAPbAKsNneKaAbABo_KLqI'
    }
  };

  return JwtAuth.do(httpClientParams, signingParams);
}

go()
  .then(out => console.log(out))
  .catch(err => console.log(err));
