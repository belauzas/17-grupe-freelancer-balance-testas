"use strict";
import account from './data.js';

account[0].month = "Spalis";
account[1].month = "Sausis";
account[2].month = "Kovas";
account[3].month = "Liepa";
account[4].month = "Vasaris";
account[5].month = "Gegužė";
account[6].month = "Rugsėjis";
account[7].month = "Balandis";
account[8].month = "Birželis";
account[9].month = "Lapkritis";
account[10].month = "Rugpjūtis";
account[11].month = "Gruodis";

<div class="container">
<div class="row">
    <h1>Good year</h1>
</div>
<div class="row">
    <h2>Metų balansas</h2>
</div>
<div class="row">
    <div class="table">
        <div class="table-head">
            <div class="cell">#</div>
            <div class="cell">Mėnuo</div>
            <div class="cell">Įplaukos</div>
            <div class="cell">Išlaidos</div>
            <div class="cell">Balansas</div>
        </div>
        <div class="table-content">
            <div class="table-row">
                <div class="cell">1</div>
                <div class="cell">Sausis</div>
                <div class="cell">150.00 Eur</div>
                <div class="cell">-</div>
                <div class="cell">150.00 Eur</div>
            </div>
            <div class="table-row">
                <div class="cell">1</div>
                <div class="cell">Vasaris</div>
                <div class="cell">150.00 Eur</div>
                <div class="cell">-</div>
                <div class="cell">150.00 Eur</div>
            </div>
            <div class="table-row">
                <div class="cell">1</div>
                <div class="cell">Sausis</div>
                <div class="cell">150.00 Eur</div>
                <div class="cell">-</div>
                <div class="cell">150.00 Eur</div>
            </div>
            <div class="table-row">
                <div class="cell">1</div>
                <div class="cell">Sausis</div>
                <div class="cell">150.00 Eur</div>
                <div class="cell">-</div>
                <div class="cell">150.00 Eur</div>
            </div>
        </div>
        <div class="table-footer">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">0.00 Eur</div>
            <div class="cell">0.00 Eur</div>
            <div class="cell">0.00 Eur</div>
        </div>
    </div>
</div>
<div class="row">
    <h2>Metų suvestinė</h2>
</div>
<div class="row">
    <div class="summary-list">
        <div class="item">
            <div id="minIncome" class="value">Mėnesio pavadinimas</div>
            <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>
        </div>
        <div class="item">
            <div class="value">Mėnesio pavadinimas</div>
            <div class="title">mėnuo, kai buvo daugiausiai uždirbta</div>
        </div>
        <div class="item">
            <div class="value">Mėnesio pavadinimas</div>
            <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui</div>
        </div>
        <div class="item">
            <div class="value">Mėnesio pavadinimas</div>
            <div class="title">mėnuo, kai buvo didžiausios išlaidos</div>
        </div>
    </div>
</div>
</div>

export default renderTables;
