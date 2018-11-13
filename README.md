# HotAndCold
This is a Hybrid-App about the local weahter and every destination you want.
## required Softwares
* Node.js
* Android Studio & SDK
* Cordova
## Guidelines

### Commits


**Vorlage:**
```
<typ>: <betreff>
<LEERE ZEILE>
<body>
```

Der Typ soll einer der fettgedruckten von [Typen](#Typen) sein.
Im Betreff soll eine kurze Zusammenfassung der erledigten Arbeiten sein. Die ganze erste Zeile ist bei jedem commit pflicht.
Der body soll eine detailliertere Beschreibung der erledigten Arbeiten sein und ist optional.

### Typen
* **feat:** Ein neues Feature
* **fix:** BugFix
* **style:** Änderungen, die den Code nicht verändern (Leerzeichen, Formattierung, ...)
* **refactor:** Refactoring
* **perf:** Performanceverbesserungen
* **test:** Tests ergänzt/angepasst
* **chore:** Änderungen am Build-System, Bibliotheken, ...


### Mergerequest
#### Story 
Beim Erstellen einer Mergerequest zu einer Story ist folgende Konvention anzuwenden:

```
Story x, Task x: <Text>
Beschreibung: Generelle Beschreibung der Story, optional.
```

#### BugFix
Beim Erstellen einer Mergerequest zu einem BugFix ist folgende Konvention anzuwenden:

```
BugFix: <Text>
Beschreibung: Generelle Beschreibung des Bugs / BugFixes, optional
```

#### Refactoring
Beim Erstellen einer Mergerequest zu einem Refactoring ist folgende Konvention anzuwenden:

```
Titel: Refactoring: <Text>
Beschreibung: Generelle Beschreibung des Refactorings, optional
```

## Branches
Der Branchname soll in Kleinbuchstaben geschrieben sein und mit '-' anstatt ' ' getrennt sein. 
Es sollen kseine Sonderzeichen (ä, ö, …) enthalten sein. 

Der Branch-name soll nach folgender Vorlage gesetzt werden:
```
<typ>/<beschreibung>
```
Beispiel:
```
feat/paging-hinzugefuegt
```