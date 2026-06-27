# Vlny B2B Outreach — projekt pro Claude Code

Asistent na oslovování firem s nabídkou brandované obsahové spolupráce ve Vlnách.
Najde správné lidi, napíše personalizovaný e-mail, pošle follow-up.

## Jak to rozjet

1. Rozbal složku a otevři ji v **Claude Code** (`cd vlny-outreach` → `claude`).
2. Claude Code si přečte `CLAUDE.md` — to je mozek celého procesu.
3. Napoj **Gmail** (přes MCP / konektor v Claude), ať může odesílat a číst odpovědi.
4. Naplň `data/leads.csv` kontakty (ručně, nebo z exportu LinkedIn Sales Navigatoru).
5. Řekni Claude Code něco jako:
   > „Projdi leads.csv, pro každý kontakt udělej rešerši a naskládej úvodní
   > e-maily. Ukaž mi je ke schválení, neodesílej."

## Struktura

```
vlny-outreach/
├── CLAUDE.md                  # mozek — instrukce, pravidla, workflow
├── README.md                  # tento soubor
├── playbook/
│   ├── icp.md                 # koho oslovovat + tiery
│   ├── personalizace.md       # jak psát větu na míru
│   └── sekvence.md            # časování a follow-upy
├── templates/
│   ├── email-1-uvodni.md      # šablona úvodního e-mailu
│   └── email-2-followup.md    # šablona follow-upu
├── examples/
│   └── jahoda-emco.md         # hotový vzor (laťka kvality)
└── data/
    ├── leads.csv              # vstup: kontakty
    ├── crm.csv                # stav každého leadu
    └── odmitnuti.csv          # suppression list — neoslovovat
```

## Dvě rozhodnutí, která můžeš změnit
- **Zdroj kontaktů:** ručně do leads.csv (default), nebo napojit Apollo.io /
  Hunter.io přes API. Viz CLAUDE.md, sekce 6.
- **Režim:** `--review` (drafty schvaluješ, default) nebo `--auto` (odesílá
  samo). Začni s review. Viz CLAUDE.md, sekce 7.

## Bezpečnostní minimum (GDPR)
Cold B2B oslovování v EU jde dělat legálně, ale: identifikuj odesílatele, dej
možnost odmítnout další kontakt, respektuj suppression list. Pravidla jsou
zadrátovaná v CLAUDE.md (Zlatá pravidla). Pro ostrý provoz si to nech ještě
potvrdit od právníka.
