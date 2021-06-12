import "./ProfileInfo.css";
const ProfileInfo = (props) => {
  return (
      <div className="profile-info">
        <div className="profile-avatar">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9gLFRMDFXo+CF8AAB7aSURBVHja7Z15lFxXfec/9973autVanVrtS3JtrxgjEFgYxtsB0PgDAEDxhyWITOJPebgZMgA4zDgYGKSeDgzTMhCCDAsziSZAGfCFphhsQ1jYDDGC8Y7yEK2LKx961Z3Vb1372/+eO9W3aquVi9qSd1S/frUqdf13qvlfb+/9d77e0pE6MrJK7p7CboE6EqXAF3pEqArJ6VEJ8OPfPflG9YBrwbOVkqt07BeKbXSaFXRilGl1A4ReQrYCvy4YPSX//jbjxw4Ga6NOlGzgPdccdYLRORq4I3AhhbWa43RCq1AKYUmewb8a1ZEHgS+mjj57J9999FfdwmweIA/W0Q+AlwVvu4EjFbEWqGUygiQA290E3wCMgCISM0Jn6ul9v233v7YgS4BFqj8wWUblmvFLcB1gGnfb3Kglco036iACFNYAk+cnAhjiZOP9RTMh//j1x9MuwRYWD7+pcBXgKGOP1KpBgE8+J3I4IkQEqCNBCROHh2rpS//yB2PPdslwMIA/x3Axw8X0HrAPegzIUMoIoLzzwLWyd6JxL76w9955O4uAY6T/Mu1L1G3/3Lnx7XihmlTHa0zcLVqIUPoBnxM4OOBtjigYQmsCNYJ1km9ltpr//jbj/xDtw5wHOTOTTv/pB38ds3ttE+1abhW+SMH3xMiDh6hhfDHGa0Kxch8/ubffM7lXQtw7AO+N2vFP3lAQxa7QGPb/X8nCxBut1uJMAbI/T+SW4Bg+1Di5JwPfevhrV0LcGx8/gu14rbQPHut9mC3++8Za0OblYhMs17QniYG/OgBvvfBV5xb6hLg6Gt+DHwRKIavp861mPOC6fyzQjKISMdHuC+1rpEBhNnApCBTq9OVUn/eJcDRl+uB9Z12pM5hnTR8eDk2k8AOtzsB62RSoEdqs/e1beQJLYaIYLT6dze94tw1XQIcJfm9S8/o04o/nWq/B66WWhKbAVQpRA2X4MF1AeAe6Hb/7n18kgOfuEb61/Ie3v3kJIhirT7dJcBRksjoG4HBSaA7IbGBprqMBIfqlvF6itGqob2hqQ/BDEkQar9/b28JRITUuSnjisTJq278jbPPW0wEWBSjgTe94lyjFe9qB79uHaPVhInEel+M0YpIawpGU44N1lmUUnkxR1EIzLYIWJcHD07w8aMFtJJJtQCv9e3Vwew4QUSU0epG4N90CTCPMl5PLwEGQvDH6yl7x+sUIs3qgTJLKwWMVozVUnYfqjNWTxmrp8R5PFCMDLFRJC77v5ZaKlE0KU5IbQaoKACZ5GZ8VXAqEyoir+lagPmXq0IQJhLLgWrCir4SL73weaw/awO9IyvoH1lFmiZs+/kDPHHvT3j06R1sH61ysJai6ykFoylGhnJsKBjNaC2hYDJrUYg0kdYthEhy0+/aMonQErSPIVgnS959+Ybnf+z//uKBLgHmT672G9YJo7UM/Fe89EVc8bvvQAEoA1qjVMTI6edwwVVvZffmJ9hy/9384Pt38cvte6lbR906xnMy+DzfB4pGK0pRRghfCPLBpZlyfMC1pJ05Wa4BFgUBFnwl8A8u27BaK57x4B+spWjgxWes4HXveR/l/gFQGqU1qAilDUpHYCKUjtAmol6tsfWhe7nz61/hZz9/hPFa2lL1U0EV0I8bhFZBK0icMFpNMtIoRWxUwxL481LnmEgskdaP/dfvPX5u1wLMj6wJI/6JxHLWcB+XXPUGyn19mZtWmTdWSoHSoBReX8U54mKR0y98KWs3voSJiTF+9p1v8MgD97Nn716KSihKSkEsS/oq9PX30ds3QKFSIS5XiEsVonKZqFghKpUREe78p7/jqd0HsHkkaJ1A1KwgisjKbgwwf7LKm9yxespAKWb9cD+nnn9Bhr0ClYOOCkmggyjeIQ600fT2DXDpG97KJa9/W35sWAYWaFhEyWNAX0TK94njNUPD/Pjzf8kvdhxgz6Faw1UU8hFFK9LXrQPMMwG8pq3qL7F0eBilcy3PGJCD2bbd9HTeHCDOoRRorWjwJmOYZ0J+bvNZ+f/z9xrecB4Xvu0dnDXSz1BPsWkFciI5wbz78g1DXQLMxxdUAQFEKEaG3mXDOV5qCu3PX6cFt/x4GpqcPef7GiC3gk8IfkCs5ec+nwuu/m3OWNZHweisuJSnknn8uKpLgPmRnvCfUqTpXTYcgEYrcKg21DvNEQgshGqyJBxVzI4JD297X6VZ/fyLWPuiSxjpKzUqiK6Zrla6BJiPNEWpst82+RBt79AyskrNTMx/kwiqBXRatFu1WQA1yQKE4HuyaFZfcBEr+rKR4FpqwzKx6xJgnjjgAYpMlpL1LhsJArhOGq86mH+mtAotGq+m8v20fWZ27NBp6xlYOkSlMCme7hJgPkRE6n67kOfgfctGCJx3AI7qYK4Px6tOloIpfH+HY/LjVj73BSytFFreyWglXQLMgzghDQlQ7usnKsRNDVWtprwV1MMQQbVrv+qQBYTzDFUn/wQoVnUggHXStQDzJAfzbACtYNnKlQjSQSM5jNar6Q/peJziML6kQZz+lWtYuXp1y1gCsKtLgPlJA7eEPnhw+fI8Z58C+ClmBh9uxvAcw5LA1Qgrz38h/aVGHGCv/d1127sEmB/5ZZgC9g0tm0LjFUeO8eQq4EyMBShWnHN+YxrayPLhWvm0t45u/uH/fF+XAHOU++77dPyL7372vS963jnPN0olACsGe1hx5lkzAOQIwBdfDpYA/+njuZ6lS1m+Zg1xschvvO6qgomiMiK/vdAJsGDHAobGe1/mSvLRi65+I1X9tWcfeuDnKzdedhmlvt45oR3O35v8OlldQYWupTmNbLKF6MyJ9edfQGHNeladekqUikMF1qtLgNlH/z1ZwU3zyt+5rrbqtDs49/JLpr76ueKqKbVbtW4KkwEX1fbeMsXHdbYI513xMs6LSozueQbqDqfUnV0XMEcpxPH3fTFF0vSUi6+6hjiOZ2bCZwBW+LqEI4DBozEK2HhMth7hPq0V1A/hbJ4BprZLgLnKmouv2Us+q8bZ1IitHj5o6wj2NODLVKa+w4qijvHA5PcBh80IsPP0K97+cJcARyZ3AFibAFqatnsmmt3JTUwV3E2eNt7iV1osQpvPCa2AgLPWe5nvddPAI822JSOAWItzKGUK+fWeDKJ4MIIJm634Shsl2l2GTH6ITKH0bedIM2201hcu5fYuAY5QSj2HfgjUEYsTB6ZAWN5tAi15QOcDO2lNDZW0lfCb5nqSf+9oHXLtV4EF8Q8XWghIUwswZgvqS10CHKGs3Hj9OCLfBkiTOjouNcDMhmNB5WMCCk1jDogimzGkdD4/RKHETwbJz4HsHKWC//24j+T/589+noD4oYLGNKLcK6mMLkpI0hQUf3fGRW872CXAfLgB1McBkqSOuGRytc77bHEt2pgd5ppKHpwn4l90zdlBuFaLIJ2yAYLzgkd+vDhLmiSiU/1xFokseAKsu+xt3wWecDahNrYvx8Tl7rktbQsmborYyf49AHJS6td4G9cyXUxcMH0sDCAb7+8J5ajX64jwt2uveMvjXQLMn4hCPupq4yS1alNr82dpgCWN1zPQAj8vnWv8k6t8AUFwTUvRCDxdA3BpfLbLyOAEmyb3rd9ReBeLSBZNi5jNd/3j35hI3zDY3wc6QimNNlG23bIoRIM2KGVA+8mhbRM8GgGimqau1J5t5OSwKeLS7NkmOJsgLpHI2dWVc165qNrHLZrl4esv2/TvnaTXiriDramfbVoEZxHnWl2AhPl801/n67rarIc3867NWjSPEWdbNd8f79wDiw38RUUA+JBbd+nbP4fI13BB8OV9sAsCO5cHdGJzIngzHZ6XvxYGgP59nDTfw7/uXYKzGdEk+19cTgLsN1mEsuiaRCnt/t5H5uJsyxx/r5mSgy0usAph9N4S8bdF9BLs85lFIwBMc0JZsGnjs8RaUYn6xy4BjoEMnPf67yLu583Uy4OeNgF0kmmqJwM2CwydBFruWiP+cD9tkT8OsTmRnGu4AXFZ8Idy/9J3/que6BLgWKUFzn20oaktuXiu9WKb5locWAsuDeICF9QApM0CtBJBxCIuBUlz0x8SLSOYcnyURSqLkgCD6c4vIG5by+BNI/Bzra7A+qCtaRGaqWO72Q/cAuQuJtN8yTW/8R4+GER+2nfuK3/QJcCxlI3XJ8Bf5cFXB01uiwucawRtNFyGaxv5y9JCn9+LD/Zc5vsbBHK2zQ3IotX+xUsAwNVrn8LJaIa9a2i15G6hWcELgHdN60Cu3R7UpoZ74JuWQ1xr+pdF/g6bJr8eeOTgP3cJcBxkycZrDojjM5m/lwykTq7AE0KaAaDkrd68aacBtG3syyyL9/+2GVsE51trP8o119guAY6TRCr9CE4dbA3iaARvuIAYDXBdQ8ubwDf9O0HqGJr7rMTswbeMHxqvLxvo+1sWuSxqAvSe//qdInILuKx2H5p4TwJvtrOWkA33IG2mv2Hmsc1cXxqBXhsZhE1bnrmXtVdUuwQ47hnB9r+uVpOaB7lhwoOBG18ubgzgYFsrgp4cvooYmPow8HMuqyls37GbXfvHv8UJIIv/xpEbr092Hqze35wO1kaCsGTbANSnci6wAD7ws40KYkaaVvCddfziqWcp9xTv6xJggYildMf2XXubqZ9ziHXZBE1pnSPQjPQd+AJPOFbgieCtibUZ+Lnr2LTlaeJCWUYf33d3lwALRCo9/fdu3TVGmqZt/l8aWh3O/pGgLpD5/sAq+MzBWZxLm+MJYhmfGGfbrlF6env3v+mWW/Z1CbBApC8q/GhgyQiPPLmt6fNx+QyhDFxn26qA4aif385dhsutR4NMuTV44NEn6R8YpLe3b5ucIDdcPCEIsHLj5bsHli6dqErM07/eEZR6bSMmQASxmb93Lptl7MS2PqxtAp/7fx8DPPzEZpwuMTC4lGKluIkTRE6Yu4cXC6W9y4ZGeHp3lYnUNEx7Y5qYeL8ugQXI6wGN0UE/3cu7jWxG0fZde9ixb5yhoWF6e/uJiZ/oEmCBSRyZsYElSxhaNsKjm7Yi5SUoHTWj+kZqmEf62HwaaW7iW/J/Qems1/D+A3t5ePOvGV6+koHBAYrlMlqb7SfKdTthbh+vtB7t6eljaCgltQk/uvs+Ln7xhZTLFVztUD6M6xeS5Is3JQgWRVDGN5qMwFm2bt3Cw5ufZWRkNUuWLqVc6SGKYpROnu0SYMERQI0Wi0X6BwdRCiIT86Of/JTTVg6zatUaevuXZk2GwnUEIQFsikiKS6rs2rmdp57ext7xhBUrVrN0aJhKTx9xoYAxmjrpji4BFpiIk0NRHGfNIgcUxsSUyxX27d3Nk3f/BFevZYWcekLqEsSJv1NMXibOzrEiRHGJ/oElrF69goHBJVQqfRSKRSJjUEqTOvZ0CbDAxBjTa4xpLPUyJiIuFChXyvQPDjA+NsrE+DjV6jj1eo20Xs9AV1lBWGtNsViiVCpTrvRSrvTQ29dLqdJDFBeIjM6WmimIYrO0S4CF5gKgTymF1poojvKO8T0UC0WKhSKVUoV6bYKJapWkPkG9Wg3PRRlDsVAkKhQplMqUymVKhTJxXMToJvgohVbR8i4BFlo6Y0xv2L7N6AiijBAlqaARjNZobagZjdGm1YJoTVwoUigUMcUicVTERAatdX7P2KDXsMhIlwAL7YcUiqv88l+FQpSg8/bxkTG4OMbalNQaojTCRVFLOxltTEYQY4i0yRpTat1cEJRvaqUwkXlhtw6wgGTTfV8/q1iq9Pnl4i22PXgO28GrDv+j1aROYs0WxNmfoIii+PIuARaQ7HroC7/vgz86tYtvNPoIm0h0jiRE8lXGHbtOZv0C4mLp1J9+46+GugRYAPKld6tzRzd/5Z3J+O5Gcae9tYv4Nf5hP4F2aP0K4PA8aX07v8g0re7T+x+49Z7v3axO6xLgOEt/mYeMVM3T9/73RmHXg9joGuAkX/ofLvpsl3DJN82pZfmiYm8ZnLNsuvMm4nTHeuBX37lJndklwHGQ79yk1v2f96u/j03Wnm/7g7dxYNv9zSZReT+fxti/czkJBOdcRwsgjd4AeXUwJ0vYYmjrvZ+kvuPH5I3BldF84a5b1KINChdNfwCllLrzg5QSy5ud8DsiXOocOo6gkAf0qrScC978ZaLyUGPad5rWqVWr1OtV6tUq9eoE9XoVm6aTi0lRgUIhJoqLxIUCUVwgLhSyvgNKcWDrj9n6vf+A0YLW+QJiIDZghYeA25KUf7jyT2RnlwDzYd4rSt3+R7D/EBc54XrgDeQ3kc7u9Jnd/dvfrUUEelZs5JzXfh5REeIcSb1GvValVqtSr1VJalkRqNP9HIwxWeGnUCCOm0RwyRjP3P9ZJp76GlrqDfBFoJQ3L81uMQvOkYhwR2L5XE+Rf7705oV944gFR4DbblDq3DUwOsFwYrkWeDtwjgfda1yzJtNM1zwwS85+C+te+kekaUqSVElqTRIkORE6+kOtM62Pi0RxjFaOnY9/md2Pf4GiGqcQ0RH8SdFETgZr2e6ELxnNJ664RZ7oEmAaTU9S9GiV14hwHfAKoOCB1ioD3oMdinVNS+ABGjzz9cRLNkC8jKiyGlMYpF6vUa9WSdOk4/ewyTiQoGyNif2b2PvL/0VZdlOMWgkmkn/WYTrMuOCyJtnc1LuB2woR/+PSm6XaJQBwz61ZdX37fgZiwzud43rgNK2bIMdZq5/83sHNiysCic1XfgsYA5VC0x2EYFUTqLsSqmcturKKWq1OdfwgteoYaTKOsoeIZIyCEUoxxFGm3aGlCaU4y/ppGxn2ac1njOJvLr1ZnjrpCOBBv28zet0IG0R4r3O8Cej1t9wxOnvovKYzUW8CcTiti01rBe9w4tsA+M/rtL/dzRgD8RzzJtd2mW12M6yvWstf9pT40UU3wfGYaHrMCHDPrUr94DH0ikH00l5e7RzvssLlgPbAtQMfarLfNirzr9DcbgfF5dYhjA9mI/48J9l3mc7cHwkZ8t9yL/DXzvHFSpH6hR84dkQ4JgS451alt++nLzZcn1iuB87wABrTGtyFAV0nMW1AhMD4C9v+Wh6dM5OfqlSr25lP4Nu/U0jmXLYDn7SWT/aU2HksiHDUCfCtD6h19ZQ/dMJbgAGtmsB3Cu70NCbWBK4gBKgT+AtVOriD9t9YtcIXjeIvLr1ZfrZoCfDVG9VN1nIzUPCa7gOrTlH9TMHvBPRiIkAnN+B/WxsZxCg+Adx46c0ysWgI8K0PqMqhKt+up7zEm1RfsfMFHK2m9s+diLDYwXeHucx2eggeB37rsg/JkwueAN/6gCocnOCuap2LYpOBPlPwD+f3pwP3aPnro2n2p9D6qWQL8JLLPiTb5vN7zftg0MEJvlmtc5HRmZ83OQmKUTO4mqnEOnssdvC9ddJtgFuZMfgAa4Hb77pFDSxYAnzlver3qnVeDk2tL0ZTa3w41h5qv1Fzz7cXujSC4LkR9mzn+C8L0gV8831qaLTKJusYNDoD3pv/MLdv/7gwAJyJqT9RxM1O+1v0JncF/29BWYB6yqdEGIxzrS8VmqleJ8Dbff9cwXeLeJH2bK1AXhBTwKfuukVFC4YAX71RvTJxvMGXSk2Q6k1XdNH6yLRoMbuCmQAePgISnAf84YIgQF7b/yBkayuNaQ32fJ09vIlHuxU4mUz/LLX9cPve86MPq/i4EuCeW5Xasosha7kwBL/T4Eo7wKH2Hwn4i5k4nb57qO3TEGQosbwsV8DjQ4D7NmNKMf8aiPVhtNi6Zjd27/MbI39z/PpOTgxNn8vvDwLpq+/bjFFq7iSYMwF+/1VKG03ZCVdDtqzeqM6TNab48sfEj55oIq1T1l9biol/8mccewJceDpRX4kRcbzIa/9sArpYd33/PMjytcO85PFtmP7K3KzAnAhwz61KGU2xXOSNTih6UzZd5N9uDU5W39+pMHS4wG/yApUWeV1PEfOmi+dmBeaUS379XqIzVtAPvFbnXVWm0/5wOpdyTeqdKL78OMpv7T/Ef7r+SpJjZgGes4YCsBJ4gQqqfHPRyq4LOLzGzyBmOnX1EC/Ysgszl4xg1gT4z29RBujtK/FacZTmEsl2+lF27qXRk16KEa87VMUAR58AZ68icsJSY3hV403mYEec0Ljb98kOfPj755gl/SvniH7w2FEmwD23KrXjIGXrGAGe4034XMy//9E+ffQB0MlMhiNIkTecsoyzNq4/ygT4wWPoYkRPqcCV4qioOWi+dZ3jAK2zOf5GnbzaPxcr2kirDVftPIiebRwwKwjXjxA5x0Cs+c3gg+f25V2zX2MYRyT25CJASPjZhnC69dzXxHr2FmDGaeA9tyq1/QClgmGNE56rj6CI46Tth+vsTqyu81TpE16cm50LCDVfNxevPE9pNgAPHxULcN9mjHMMGsNVWlE5klSukxvwVUE7w8GQE0m0nr3/b1dApaAY8fbHt82utqNnaS1WFCNe6Rnop3i3F3OctA7+dCr4iEDSBrRSJ58LCC3AdFrffk0nKZHm9dsP0HfbDTN3JjMigFJK9RTRiWOpMZzizXYnJh7utUlEcR1NWVemMPl6ivWRfmi9p8jpgxVO/eETzC8BRERs1mmlfqjKrrmY/fZzkvA+zrSWk6vJyeUGpiJ9O/Dts599QzQ/pW7PGE9u38/e669E5pUAOWCJE7btOMD/Hq1yKIxa/aJOo6cPWqar/auTLA2ciujeFfqFrh2i/sa8Cudg5wEO3v8rPuaEg7NZUzjjgOGCtdjvP8q2espXt+yif+dBLj5lKauW9BKZwMTHZmo/3mn+vhPwmaSfCl5Ps+NKhZPPzIdBsnVTpnwN4PeMkjy9myf3jPFNEb6/Z4yx2XzurKaFX3el0quXsATYCLxMKS4vxaxftYSlIwNE4VzAdhK0L+T024WoCbQ4qKWwZxQqRSgXjmzS6GLQfn/5pwt+C1Gry9g1SrJlFzsOjvNzEW63wl1JyqP/7RuzW0M463UBt92g1AO/ojeOWFeMeGFkuFgpzi1GrFm5hJGlvRRLMcoXiMLOHp0kNlAuNv+fqMFoNTtvsHJiEMC51j4HIZCHuz6mbVVULUX2jVF9ajfPjFXZnDoeAn4ojgf3j7P903dQm22TiTktDFFKqXe8nLgUM1SMODUynB4Zngs812hO6ysxPNTH4GAPhZAMnQgRm6wdiwrM/3ituc+cAAQ4XJDXDr7vfOavWTVB9h+ituMge/eN8Yx1/DJ1PCSOR1PHU7WUrdWE0c/cIelcvtsRrQy67kqlh3qIrdBrFMuV5lSjOCMynKkUa4FVgz2MDPexrK9MqRBlTR3bme3XEyidEcD3/VlMcwU69SqYqujVDnhi816DrgG6qyZM7DrA7p0Heco6nhHhV6llkxWeFOHX1rGrmlB98Zkk//YTcwdxXpaG3XaDUj/bQjQ6QXHFIIPAkFIMG80KYK1SrNOKU2LDyJJehisF+vtKlAoRJo6ynDVsyOTTGmh295jKbHYqMM0kkwjXKEx1Cfy+Tmsap7eSrcFbJ03PX5dqnbSaMDFa5eDeMZ6dqPMM8LR1/EqEp1PLLmBPNWFPZBg9VCP51O3Y+egpNO/Lw191gTJrhzGlmKinSAkYVIoho1kGDCvFCq1YaTQjWjHcU2JVX4mhQkQljijGWXt/HZuMGJ2GmtstyIEg7BEH/ZXWC+46jLfPpuJo8qi7Wm+6qunqHGHzyvzzxFpc4kiqdarWcWi0yt79h9jihB3AdhF2pJYdVtgN7BHHvnKRA8/uo14uYMdq2M/cMb+NJ49qh5D+ilLvvwr94NNEp49gainlUkyP0QwA/UC/0QwCw05YHhuWkLWR6TeGwZ4CQ3FEj1GUtCY2mjg26PzOMNooNKDztfZ5W+fOfYOmEyszG4rO010BJB+0cs7hRHBOsInFStYBrJ5YajnQO6t19gIHnLAf2JNadhrNbuBAahlVigPVhDFgbPt+krXDpPduxn37QdzR7B52TNvE9VeUumQDOrWYjetQgz0YJ8T1lB6gF+gBykpRBspARSt6nGRkyY8pa0UMFIBCbBrbMRAbQynfNv7ZKLQVTKzR+es6f3jI8zbiWJfdQsza/Dl/pPkjSVImgLp1JEDdaOrWUXdCIkJNKSaAUZEMVBHGgQlgIrXZs1KMJSljVpgQwW7bhxusYFOH++ydyLFsF7cgOoVed6XSgF6zFD1RQ6UO3VtCpxadWgpAKTIUI0MxtRQig8mLWEYpjAixUpjUYozGtIHsj42B2Dqi/PjIaIzNmohbo0mAxDqs0dQD0D0RnFKkIljrMlIYnREktaSRyY5PLYkVqkAtSanGEak4XLmIm6ghm3bgzlyJO3sV7kiCtxOKANOlnNe+DLWsD7X/EGqsiu4twUA5097IoOIInt2X3SJooAy1NNtXTVC9pcxyVxOMUZjBHnQtxUQanTqMUUgtxZVi7OgELo6wqcVWE1xvCTdWhVKMJCn0lpD947ByCc6PWYhDntmb7ds9igz3I1t2IWuGkGOtzSckAeaTSJ9/J/iRsmf2NEfMzliBVPNZ9V/6MTI6cXy6dh4P+f9SgZIVNu8mVAAAAABJRU5ErkJggg==" />
        </div>

        <div className="profile-info__details">
          <div className="profile-group">
            <p className="profile-field">Name</p>
            <p className="profile-value">{props.infos.name}</p>
          </div>

          <div className="profile-group">
            <p className="profile-field">Type</p>
            <p className="profile-value">{props.infos.type}</p>
          </div>

          <div className="profile-group">
            <p className="profile-field">Address</p>
            <p className="profile-value">{props.infos.address}</p>
          </div>

          <div className="profile-group">
            <p className="profile-field">Contact</p>
            <p className="profile-value">{props.infos.contact}</p>
          </div>

          <div className="profile-group">
            <p className="profile-field">Email</p>
            <p className="profile-value">{props.infos.email}</p>
          </div>
        </div>

        <div className="profile-description">
          <h3>Descripttion</h3>
          <p>{props.infos.description}</p>
        </div>
      </div>
  );
};

export default ProfileInfo;
