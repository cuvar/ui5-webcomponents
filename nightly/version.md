commit 9740fe21baa34233a66a4aea02f261fe1f5992f2
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Fri Feb 16 14:25:28 2024 +0200

    fix(ui5-illustrated-message): improved story and documentation (#8294)
    
    In the "Custom Title" story we had "titleLevel" story control which
    didn't take any effect upon being changed. This control has been removed
    and "titleLevel" property is now documented that it doesn't work when
    we are using "title" slot.
