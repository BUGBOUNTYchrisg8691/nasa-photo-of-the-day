#!/bin/bash

urls=("https://api.nasa.gov/planetary/apod?api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/GST?startDate=2016-01-01&endDate=2016-01-30&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/IPS?startDate=2016-01-01&endDate=2016-01-30&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2016-01-30&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/SEP?startDate=2016-01-01&endDate=2016-01-30&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/MPC?startDate=2016-01-01&endDate=2016-03-31&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/RBE?startDate=2016-01-01&endDate=2016-01-31&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/HSS?startDate=2016-01-01&endDate=2016-01-31&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/WSAEnlilSimulations?startDate=2011-09-19&endDate=2011-09-20&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://api.nasa.gov/EPIC/api/natural?api_key=I83MwsFqeOeinDpocUImQQWOw3eDdrbZsjxt6636" "https://genelab-data.ndc.nasa.gov/genelab/data/glds/files/87")
names=("APOD" "Ast_NeoWs" "DONKI_CME" "DONKI_CME_Anal" "DONKI_GST" "DONKI_IPS" "DONKI_FLR" "DONKI_SEP" "DONKI_MPC" "DONKI_RBE" "DONKI_HSS" "DONKI_WSA+EnlilSim" "DONKI_Notifications" "Earth_Imagery" "Earth_Assets" "EPIC" "GeneLab Studies")

# for i in ${!urls[@]}; do
#     http get ${urls[$i]} > ${names[$i]}.json
# done

# a=(1 2 3 4)
# b=("a" "b" "c" "d")
#
# for i in ${!a[@]}; do
#     echo ${a[$i]} > ${b[$i]}.txt
# done

for i in ${!names[@]}; do
    if [[ ${names[$i]} == "Earth_Imagery" ]]; then
        curl ${urls[$i]} > ${names[$i]}.png
        # echo "name : ${names[$i]}, url : ${urls[$i]}"
    else
        http get ${urls[$i]} > ${names[$i]}.json
    fi
done
