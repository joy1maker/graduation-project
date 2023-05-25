export const template = `<p class="MsoNormal"><span style="text-decoration: underline;"><strong><span style="font-size: 18.0pt; line-height: 107%;">Doctor Report</span></strong></span><span style="font-size: 18.0pt; line-height: 107%;"><span style="mso-spacerun: yes;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></span><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">Nile AI Medical Center</span></strong></p>
<p class="MsoNormal" style="margin-top: 24.0pt;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">Patient Demographics</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">Name: {{name}}<span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Gender: <span style="mso-spacerun: yes;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>City:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">ID no:<span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Age: {{age}}<span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Visit no:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;">&nbsp;</p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">Allergies:<span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Medical Alerts:</span></strong></p>
<hr>
<p class="MsoNormal" style="text-align: center; margin: 12.0pt 0in .0001pt 0in;" align="center"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">Medical / Surgical / Family History</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">Medical / Surgical Hx:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><!-- [if gte vml 1]><v:line id="Straight_x0020_Connector_x0020_2"
 o:spid="_x0000_s1026" style='position:absolute;z-index:251661312;visibility:visible;
 mso-wrap-style:square;mso-wrap-distance-left:9pt;mso-wrap-distance-top:0;
 mso-wrap-distance-right:9pt;mso-wrap-distance-bottom:0;
 mso-position-horizontal:absolute;mso-position-horizontal-relative:margin;
 mso-position-vertical:absolute;mso-position-vertical-relative:text' from="-2.25pt,45.15pt"
 to="470.05pt,47.7pt" o:gfxdata="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
qkaqw9Kqez6TspyRNMuaaWUVVTXdWcxaIS8Dc7a8WpE3tMpNDDnNrPBp6p5PuWt5rpvrE4oqAQYv
7OeouhcoCIZq5WKWakrjxTSscnZGtWtHvsFzVLtIkTCyfjMXO2e3okY4lwPilSo/8M1HLZAmeV+p
Le062N5DiTcMqm0fDpdhOPgMruB42gfaqqKtKhpcwZkzlIv0oLjtZxc5BZ6nlAJTyym1HFPPKfWc
0sgpjZzSzClN39MnqnCKrw5TfS8/MIUalh2wZr2Fffq/8S8AAAD//wMAUEsDBBQABgAIAAAAIQCc
ZkZBuwAAACQBAAAqAAAAY2xpcGJvYXJkL2RyYXdpbmdzL19yZWxzL2RyYXdpbmcxLnhtbC5yZWxz
hI/NCsIwEITvgu8Q9m7SehCRJr2I0KvUBwjJNi02PyRR7Nsb6EVB8LIws+w3s037sjN5YkyTdxxq
WgFBp7yenOFw6y+7I5CUpdNy9g45LJigFdtNc8VZ5nKUxikkUigucRhzDifGkhrRykR9QFc2g49W
5iKjYUGquzTI9lV1YPGTAeKLSTrNIXa6BtIvoST/Z/thmBSevXpYdPlHBMulFxagjAYzB0pXZ501
LV2BiYZ9/SbeAAAA//8DAFBLAQItABQABgAIAAAAIQC75UiUBQEAAB4CAAATAAAAAAAAAAAAAAAA
AAAAAABbQ29udGVudF9UeXBlc10ueG1sUEsBAi0AFAAGAAgAAAAhAK0wP/HBAAAAMgEAAAsAAAAA
AAAAAAAAAAAANgEAAF9yZWxzLy5yZWxzUEsBAi0AFAAGAAgAAAAhACnrJG7TAQAAiwQAAB8AAAAA
AAAAAAAAAAAAIAIAAGNsaXBib2FyZC9kcmF3aW5ncy9kcmF3aW5nMS54bWxQSwECLQAUAAYACAAA
ACEAkn2H4B0HAABJIAAAGgAAAAAAAAAAAAAAAAAwBAAAY2xpcGJvYXJkL3RoZW1lL3RoZW1lMS54
bWxQSwECLQAUAAYACAAAACEAnGZGQbsAAAAkAQAAKgAAAAAAAAAAAAAAAACFCwAAY2xpcGJvYXJk
L2RyYXdpbmdzL19yZWxzL2RyYXdpbmcxLnhtbC5yZWxzUEsFBgAAAAAFAAUAZwEAAIgMAAAAAA==
" strokecolor="black [3213]" strokeweight="2.25pt">
 <v:stroke joinstyle="miter"/>
 <w:wrap anchorx="margin"/>
</v:line><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout; position: absolute; z-index: 251661312; margin-left: -5px; margin-top: 58px; width: 634px; height: 8px;"><img src="file:///C:/Users/Ahmed/AppData/Local/Temp/msohtmlclip1/01/clip_image001.png" width="634" height="8"></span><!--[endif]--><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111;">Family History:<span style="mso-no-proof: yes;"> </span></span></strong></p>
<hr>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111; mso-no-proof: yes;">Admission Date / Time : {{today}}<span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>/<span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>/<span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111; mso-no-proof: yes;">Principal Docotor: DR:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111; mso-no-proof: yes;">Reason for Admission:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111; mso-no-proof: yes;">Principal Diagnosis:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111; mso-no-proof: yes;">Secondary Diagnosis:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111; mso-no-proof: yes;">Other Diagnosis:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;"><strong><span style="font-size: 14.0pt; line-height: 107%; font-family: Roboto; color: #111111; mso-no-proof: yes;">Operation Procedures:</span></strong></p>
<p class="MsoNormal" style="margin: 12.0pt 0in .0001pt 0in;">&nbsp;</p>
<p>&nbsp;</p>`