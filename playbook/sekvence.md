# Sekvence — časování a logika

## Úvodní e-mail (Email 1)

- Odesílá se po schválení člověkem
- Zapiš: `stav=osloven_1`, `datum_1=YYYY-MM-DD`

## Follow-up (Email 2)

- Čekací doba: **5 pracovních dní** od `datum_1` bez odpovědi
- Pokud přijde odpověď před follow-upem → sekvenci zastav, předej člověku
- Zapiš: `stav=followup`, `datum_followup=YYYY-MM-DD`

## Po follow-upu

- Čekej dalších 7 dní
- Pokud stále bez odpovědi → zapiš `stav=bez_odpovedi`, STOP
- Nikdy neposílej třetí e-mail

## Stavy v CRM

| Stav | Význam |
|---|---|
| `novy` | Kontakt čeká na zpracování |
| `osloven_1` | Odeslán úvodní e-mail |
| `followup` | Odeslán follow-up |
| `odpoved` | Přišla odpověď, předáno člověku |
| `bez_odpovedi` | Sekvence dokončena bez odpovědi |
| `vynechat` | Přeskočit (duplicita, chyba dat) |
